import * as THREE from 'three';

// Stylized ornamental fish for the nearshore. Silhouettes are authored profiles
// (not scaled spheres): readable body curvature, paired fins, and a tail that
// actually hinges. Shading is painterly wrap light — bold species color, soft
// shadow, a wet rim — in the spirit of The Witness and Order of the Sinking Star.

const srgbToLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const hex = (h) => {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255].map(srgbToLinear);
};
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
const keys = (list, t) => {
  if (t <= list[0][0]) return list[0][1];
  for (let i = 1; i < list.length; i++) {
    if (t <= list[i][0]) {
      const u = (t - list[i - 1][0]) / (list[i][0] - list[i - 1][0]);
      const s = u * u * (3 - 2 * u);
      return list[i - 1][1] * (1 - s) + list[i][1] * s;
    }
  }
  return list[list.length - 1][1];
};
const fract = (v) => v - Math.floor(v);

const VERT = /* glsl */`
#include <common>
#include <clipping_planes_pars_vertex>
uniform float uSwim;
uniform float uPhase;
uniform float uFin;
attribute float aAlong;
attribute vec3 color;
varying vec3 vColor;
varying vec3 vNormalW;
varying vec3 vWorld;
void main(){
  vColor = color;
  #include <begin_vertex>
  float wave = sin(aAlong * 6.2 - uSwim * 5.4 + uPhase);
  float tail = smoothstep(0.08, -0.95, aAlong);
  transformed.z += wave * (0.008 + tail * 0.11);
  transformed.y += sin(aAlong * 3.6 - uSwim * 2.8 + uPhase) * tail * 0.02;
  float flutter = sin(uSwim * 6.5 + aAlong * 10.0 + position.y * 5.0);
  transformed += normal * uFin * flutter * 0.012;
  #include <project_vertex>
  #include <clipping_planes_vertex>
  vec4 world = modelMatrix * vec4(transformed, 1.0);
  vWorld = world.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
}`;

const FRAG = /* glsl */`
#include <common>
#include <clipping_planes_pars_fragment>
uniform vec3 uColor;
uniform vec3 uSun;
uniform float uFin;
uniform float uAlpha;
uniform float uSwim;
varying vec3 vColor;
varying vec3 vNormalW;
varying vec3 vWorld;
void main(){
  #include <clipping_planes_fragment>
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  if (dot(N, V) < 0.0) N = -N;
  float ndl = dot(N, normalize(uSun));
  float wrap = clamp(ndl * 0.5 + 0.55, 0.0, 1.0);
  wrap = smoothstep(0.02, 0.98, wrap);
  vec3 albedo = uColor * vColor;
  float luma = dot(albedo, vec3(0.299, 0.587, 0.114));
  albedo = mix(vec3(luma), albedo, 1.28);
  vec3 shadowCol = albedo * vec3(0.46, 0.40, 0.36);
  vec3 lit = mix(shadowCol, albedo, wrap);
  lit += albedo * pow(max(ndl, 0.0), 1.2) * 0.18;
  float fres = pow(1.0 - max(dot(N, V), 0.0), 3.2);
  lit += vec3(0.95, 0.90, 0.78) * fres * 0.07;
  float spec = pow(max(dot(reflect(-normalize(uSun), N), V), 0.0), 64.0);
  lit += vec3(1.0, 0.96, 0.88) * spec * 0.22;
  float below = 1.0 - smoothstep(-0.04, 0.06, vWorld.y);
  float cau = sin(vWorld.x * 8.0 + uSwim) * sin(vWorld.z * 6.5 - uSwim * 0.7);
  lit *= mix(1.0, 0.9 + cau * 0.08, below);
  gl_FragColor = vec4(lit, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

function fishMaterial({ name, color = '#ffffff', alpha = 1, fin = false, authored = false }) {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uSun: { value: new THREE.Vector3(-0.32, 0.88, 0.28).normalize() },
      uSwim: { value: 0 },
      uPhase: { value: 0 },
      uFin: { value: fin ? 1 : 0 },
      uAlpha: { value: alpha },
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
    fog: false,
  });
  material.name = name;
  material.userData.authored = authored;
  return material;
}

function surface(shape, t, a) {
  const x = shape.x0 + (shape.x1 - shape.x0) * t;
  const h = keys(shape.h, t);
  const w = keys(shape.w, t);
  const lift = keys(shape.lift, t);
  const cy = Math.cos(a);
  const sy = Math.sin(a);
  const crown = cy > 0 ? (shape.crown || 1) : (shape.belly || 1.08);
  let y = lift + cy * h * crown;
  let z = sy * w * (shape.flat ? (1 - 0.35 * Math.max(cy, 0)) : 1);
  z += (shape.sway || 0) * Math.sin(t * Math.PI * (shape.swayFreq || 1));
  if (t > 0.9 && cy < 0.15) y -= smooth(0.9, 1, t) * smooth(0.15, -0.55, cy) * h * 0.42;
  return { x, y, z, along: x, h, w };
}

function paint(style, t, a, A, B, C) {
  const cy = Math.cos(a);
  const belly = smooth(0.2, -0.8, cy);
  const sheen = 0.93 + 0.07 * Math.cos(t * 36 + a * 2);
  const gill = Math.exp(-((t - 0.76) ** 2) / 0.0012) * smooth(-0.2, 0.7, cy);
  if (style === 'tone') {
    let m = 0.78 + belly * 0.28 - smooth(-0.05, 0.85, cy) * 0.2;
    m *= 1 - gill * 0.22;
    const row = Math.floor(t * 18);
    const arc = Math.abs(fract(a * 1.4 + (row % 2) * 0.5) - 0.5);
    m *= 0.94 + 0.08 * smooth(0.05, 0.22, arc);
    if (C) {
      const bars = Math.exp(-((fract(t * 5.5) - 0.5) ** 2) / 0.008);
      m *= 1 - bars * 0.32;
    }
    return [m, m * 0.985, m * 0.95];
  }
  let col = mix(A, B, belly);
  if (style === 'neon') {
    const stripe = Math.max(Math.exp(-((cy - 0.42) ** 2) / 0.028), Math.exp(-((cy - 0.02) ** 2) / 0.01));
    const red = smooth(0.05, -0.55, cy);
    col = mix(hex('#d7e4ea'), hex('#e23d45'), red);
    col = mix(col, hex('#14d0ea'), clamp(stripe, 0, 1));
    col = mix(col, hex('#12343a'), gill * 0.35);
  } else if (style === 'zebra') {
    const band = Math.sin(cy * 9.5) > 0.05;
    col = band ? hex('#e7c56a') : hex('#3e6d92');
    col = mix(col, hex('#f4efe4'), belly * 0.35);
  } else if (style === 'angel') {
    const bars = Math.exp(-((t - 0.32) ** 2) / 0.0032) + Math.exp(-((t - 0.52) ** 2) / 0.004) + Math.exp(-((t - 0.74) ** 2) / 0.003);
    col = mix(hex('#e4ebe2'), hex('#f7f4ec'), belly * 0.45);
    col = mix(col, hex('#243240'), clamp(bars, 0, 1));
  } else if (style === 'betta') {
    col = mix(hex('#2f4ea8'), hex('#6d87d6'), belly);
    col = mix(col, hex('#1a2748'), gill * 0.4);
  } else if (style === 'guppy') {
    col = mix(hex('#8fd0dc'), hex('#f2f6f4'), belly * 0.8);
    col = mix(col, hex('#f0a06a'), Math.exp(-((t - 0.55) ** 2) / 0.02) * 0.35);
  } else if (style === 'goldfish') {
    col = mix(hex('#e07a28'), hex('#fff0c8'), belly * 0.45);
    col = mix(col, hex('#a84820'), smooth(0.15, 0.9, cy) * 0.28);
    col = mix(col, hex('#8a3a22'), gill * 0.45);
  } else if (style === 'koi') {
    const patch = Math.exp(-((t - 0.38) ** 2) / 0.02 - ((a - 1.1) ** 2) / 0.35)
      + Math.exp(-((t - 0.62) ** 2) / 0.012 - ((a - 2.2) ** 2) / 0.4)
      + Math.exp(-((t - 0.5) ** 2) / 0.03 - ((cy - 0.65) ** 2) / 0.08);
    col = mix(hex('#f4f1ea'), hex('#e2582a'), clamp(patch, 0, 1));
    col = mix(col, hex('#c9b8a4'), gill * 0.3);
  } else if (style === 'carp') {
    const tail = smooth(0.42, 0.02, t);
    col = mix(hex('#e0b15c'), hex('#a84b32'), tail);
    col = mix(col, hex('#f8ecd0'), belly * 0.6);
    col = mix(col, hex('#8a5a32'), gill * 0.35);
  } else if (style === 'mottle') {
    const spot = Math.sin(t * 28 + a * 3) * Math.sin(a * 9 + t * 8);
    col = mix(A, C || B, smooth(0.2, 0.8, spot * 0.5 + 0.5) * 0.65);
    col = mix(col, B, belly * 0.4);
  } else if (style === 'eel') {
    col = mix(hex('#3f636c'), hex('#d5ebe0'), belly);
    const rib = 0.5 + 0.5 * Math.sin(t * 42);
    col = col.map((v) => v * (0.92 + rib * 0.08));
  } else {
    col = mix(A, B, belly * 0.75);
    col = mix(col, C || A, gill * 0.25);
  }
  return col.map((v) => v * sheen);
}

function finPaint(style, u, v, A, B) {
  const rays = Math.abs(fract(u * 9) - 0.5);
  const ray = 1 - smooth(0.12, 0.28, rays);
  const edge = smooth(0.45, 1, v);
  if (style === 'tone') {
    const m = (0.78 + edge * 0.26) * (1 - ray * 0.22);
    return [m, m * 0.99, m * 0.96];
  }
  let col = mix(A, B, edge);
  if (style === 'guppy') {
    const spot = Math.exp(-((u - 0.32) ** 2 + (v - 0.62) ** 2) / 0.02)
      + Math.exp(-((u - 0.68) ** 2 + (v - 0.48) ** 2) / 0.018)
      + Math.exp(-((u - 0.5) ** 2 + (v - 0.78) ** 2) / 0.03);
    col = mix(hex('#f4fbff'), hex('#f08a3c'), clamp(spot, 0, 1));
    col = mix(col, hex('#2aa8b8'), smooth(0.2, 0.85, v) * (1 - clamp(spot, 0, 1)) * 0.85);
  } else if (style === 'betta') {
    col = mix(hex('#3a62c4'), hex('#e25b86'), smooth(0.15, 0.95, v));
    col = mix(col, hex('#8fd0ff'), Math.sin(u * 18 + v * 8) > 0.65 ? 0.45 : 0);
  } else if (style === 'goldfish') {
    col = mix(hex('#f0a05a'), hex('#fff4d2'), edge * 0.65);
  } else if (style === 'neon') {
    col = mix(hex('#9fe7ef'), hex('#f2f7f8'), edge);
  }
  const dark = col.map((c) => c * 0.72);
  return mix(col, dark, ray * edge * 0.45);
}

function makeGeom(positions, colors, along, indices) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  g.setAttribute('aAlong', new THREE.Float32BufferAttribute(along, 1));
  g.setIndex(indices);
  g.computeVertexNormals();
  return g;
}

function buildBody(shape, style, palette, authored) {
  const N = shape.n || 34;
  const M = shape.m || 18;
  const pos = [], col = [], al = [], idx = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    for (let j = 0; j < M; j++) {
      const a = (j / M) * Math.PI * 2;
      const p = surface(shape, t, a);
      const c = paint(style, t, a, palette[0], palette[1], palette[2]);
      pos.push(p.x, p.y, p.z);
      col.push(c[0], c[1], c[2]);
      al.push(p.along);
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const a = i * M + j;
      const b = i * M + (j + 1) % M;
      const c = (i + 1) * M + j;
      const d = (i + 1) * M + (j + 1) % M;
      idx.push(a, d, b, a, c, d);
    }
  }
  const nose = surface(shape, 1, 0);
  const tail = surface(shape, 0, 0);
  const noseC = paint(style, 1, 0, palette[0], palette[1], palette[2]);
  const tailC = paint(style, 0, 0, palette[0], palette[1], palette[2]);
  const noseI = (N + 1) * M;
  const tailI = noseI + 1;
  pos.push(nose.x + 0.012, nose.y, nose.z, tail.x - 0.01, tail.y, tail.z);
  col.push(...noseC, ...tailC);
  al.push(nose.along, tail.along);
  for (let j = 0; j < M; j++) {
    idx.push(noseI, N * M + j, N * M + (j + 1) % M);
    idx.push(tailI, (j + 1) % M, j);
  }
  const mesh = new THREE.Mesh(makeGeom(pos, col, al, idx), fishMaterial({
    name: 'FishPearl_studio', color: '#ffffff', authored,
  }));
  mesh.name = 'FishBody';
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  return mesh;
}

function buildSheet({ U, V, base, tip, side, color, along, material, name, camber = 0 }) {
  const pos = [], col = [], al = [], idx = [];
  for (let i = 0; i < U; i++) {
    const u = U === 1 ? 0.5 : i / (U - 1);
    const b = base(u);
    const t = tip(u);
    const s = side ? side(u) : new THREE.Vector3();
    for (let j = 0; j <= V; j++) {
      const v = j / V;
      const p = b.clone().lerp(t, v);
      p.addScaledVector(s, Math.sin(Math.PI * v) * camber);
      const c = color(u, v);
      pos.push(p.x, p.y, p.z);
      col.push(c[0], c[1], c[2]);
      al.push(along(u, v, p));
    }
  }
  const stride = V + 1;
  for (let i = 0; i < U - 1; i++) {
    for (let j = 0; j < V; j++) {
      const a = i * stride + j;
      idx.push(a, a + 1, a + stride, a + 1, a + stride + 1, a + stride);
    }
  }
  const mesh = new THREE.Mesh(makeGeom(pos, col, al, idx), material);
  mesh.name = name;
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  return mesh;
}

function addDorsal(group, shape, style, A, B, mat, authoredAlong) {
  const [t0, t1, h, trail] = shape.dorsal;
  const fin = buildSheet({
    U: 18, V: 6, name: 'DorsalFin', material: mat, camber: 0.01,
    base: (u) => { const p = surface(shape, t0 + (t1 - t0) * u, 0); return new THREE.Vector3(p.x, p.y * 0.98, p.z); },
    tip: (u) => {
      const t = t0 + (t1 - t0) * u;
      const p = surface(shape, t, 0);
      const rise = h * Math.sin(Math.PI * Math.pow(u, shape.dorsalPow || 0.8));
      return new THREE.Vector3(p.x - trail * (1 - u), p.y + rise, p.z);
    },
    color: (u, v) => finPaint(style, u, v, A, B),
    along: (u, v, p) => p.x,
  });
  group.add(fin);
}

function addAnal(group, shape, style, A, B, mat) {
  if (!shape.anal) return;
  const [t0, t1, h] = shape.anal;
  group.add(buildSheet({
    U: 14, V: 5, name: 'AnalFin', material: mat, camber: 0.008,
    base: (u) => { const p = surface(shape, t0 + (t1 - t0) * u, Math.PI); return new THREE.Vector3(p.x, p.y, 0); },
    tip: (u) => {
      const t = t0 + (t1 - t0) * u;
      const p = surface(shape, t, Math.PI);
      return new THREE.Vector3(p.x - 0.03 * (1 - u), p.y - h * Math.sin(Math.PI * u), 0);
    },
    color: (u, v) => finPaint(style, u, v, A, B),
    along: (u, v, p) => p.x,
  }));
}

function addPectoral(group, shape, style, A, B, mat) {
  const t = shape.pecT || 0.7;
  for (const side of [-1, 1]) {
    const origin = surface(shape, t, side > 0 ? 0.9 : Math.PI * 2 - 0.9);
    const pivot = new THREE.Group();
    pivot.name = 'PectoralFin';
    pivot.userData.side = side;
    pivot.position.set(origin.x, origin.y, origin.z);
    const len = shape.pecLen;
    const span = shape.pecSpan;
    pivot.add(buildSheet({
      U: 8, V: 5, name: 'PectoralSheet', material: mat, camber: 0.012 * side,
      base: (u) => new THREE.Vector3(0, (u - 0.5) * span * 0.25, 0),
      tip: (u) => new THREE.Vector3(-len * (0.65 + 0.35 * Math.sin(u * Math.PI)), (u - 0.5) * span - len * 0.15, side * len * 0.08),
      color: (u, v) => finPaint(style, u, v, A, B),
      along: () => origin.x,
    }));
    group.add(pivot);
  }
}

function addTail(group, shape, style, A, B, mat) {
  const ped = surface(shape, 0.045, 0);
  const pivot = new THREE.Group();
  pivot.name = 'TailFin';
  pivot.position.set(ped.x, ped.y, 0);
  const lobes = shape.lobes || 1;
  for (let lobe = 0; lobe < lobes; lobe++) {
    const sign = lobes === 1 ? 0 : (lobe === 0 ? -1 : 1);
    const fin = buildSheet({
      U: 16, V: 7, name: 'TailMembrane', material: mat, camber: 0.02 + Math.abs(sign) * 0.02,
      base: (u) => new THREE.Vector3(0, (u - 0.5) * shape.tailRoot, sign * 0.012),
      tip: (u) => {
        const spread = (u - 0.5) * shape.tailSpread;
        const mid = 1 - Math.abs(u - 0.5) * 2;
        const len = shape.tailLen * (shape.fork ? 0.5 + 0.5 * Math.abs(u - 0.5) * 2 : 0.72 + 0.28 * Math.sin(Math.max(0, mid) * Math.PI));
        return new THREE.Vector3(-Math.cos(spread) * len, Math.sin(spread) * len + (u - 0.5) * shape.tailRoot * 0.15, sign * (0.02 + 0.04 * Math.sin(Math.PI * u)));
      },
      side: () => new THREE.Vector3(0, 0, 1),
      color: (u, v) => finPaint(style, u, v, A, B),
      along: (u, v, p) => ped.x + p.x,
    });
    fin.rotation.y = sign * (shape.tailYaw || 0);
    pivot.add(fin);
  }
  group.add(pivot);
}

function paintSphere(geo, rgb, along) {
  const n = geo.attributes.position.count;
  const c = new Float32Array(n * 3);
  const a = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    c[i * 3] = rgb[0]; c[i * 3 + 1] = rgb[1]; c[i * 3 + 2] = rgb[2];
    a[i] = along;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(c, 3));
  geo.setAttribute('aAlong', new THREE.BufferAttribute(a, 1));
  return geo;
}

function addEyes(group, shape, authored) {
  const s = shape.eye;
  for (const side of [-1, 1]) {
    const p = surface(shape, shape.eyeT || 0.82, side > 0 ? 0.72 : Math.PI * 2 - 0.72);
    const pivot = new THREE.Group();
    pivot.position.set(p.x + 0.008, p.y + s * 0.15, p.z + side * s * 0.15);
    const ball = new THREE.Mesh(paintSphere(new THREE.SphereGeometry(s, 14, 10), hex('#f3f0e8'), p.x), fishMaterial({ name: 'Sclera', authored }));
    const iris = new THREE.Mesh(paintSphere(new THREE.SphereGeometry(s * 0.62, 12, 8), hex(shape.iris || '#e0b15a'), p.x), fishMaterial({ name: 'Golden iris', authored }));
    iris.position.z = side * s * 0.42;
    const pupil = new THREE.Mesh(paintSphere(new THREE.SphereGeometry(s * 0.3, 10, 8), hex('#16130f'), p.x), fishMaterial({ name: 'Obsidian eyes', authored }));
    pupil.position.z = side * s * 0.72;
    const glint = new THREE.Mesh(paintSphere(new THREE.SphereGeometry(s * 0.14, 8, 6), hex('#fffaf2'), p.x), fishMaterial({ name: 'Glint', authored }));
    glint.position.set(s * 0.12, s * 0.16, side * s * 0.9);
    pivot.add(ball, iris, pupil, glint);
    group.add(pivot);
  }
}

function addBarbels(group, shape, style, palette, authored) {
  if (!shape.barbels) return;
  const mat = fishMaterial({ name: 'FishPearl_studio', authored });
  const n = 6;
  for (const side of [-1, 1]) {
    for (const drop of [0, 1]) {
      const pos = [], col = [], al = [], idx = [];
      const mouth = surface(shape, 0.94, Math.PI * 0.92);
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const x = mouth.x - t * shape.barbels;
        const y = mouth.y - t * t * shape.barbels * (0.45 + drop * 0.35);
        const z = side * (mouth.w * 0.25 + t * shape.barbels * 0.35);
        const r = 0.006 * (1 - t * 0.8);
        for (let j = 0; j < 5; j++) {
          const a = (j / 5) * Math.PI * 2;
          pos.push(x, y + Math.cos(a) * r, z + Math.sin(a) * r);
          const c = paint(style, 0.95, 1, palette[0], palette[1], palette[2]);
          col.push(c[0], c[1], c[2]);
          al.push(x);
        }
      }
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < 5; j++) {
          const a = i * 5 + j;
          const b = i * 5 + (j + 1) % 5;
          idx.push(a, b, b + 5, a, b + 5, a + 5);
        }
      }
      const mesh = new THREE.Mesh(makeGeom(pos, col, al, idx), mat);
      mesh.name = 'Barbel';
      group.add(mesh);
    }
  }
}

const SHAPES = {
  fantail: {
    x0: -0.42, x1: 0.5, crown: 0.92, belly: 1.16,
    h: [[0, 0.03], [0.12, 0.12], [0.32, 0.22], [0.55, 0.24], [0.75, 0.18], [0.9, 0.11], [1, 0.045]],
    w: [[0, 0.02], [0.2, 0.11], [0.48, 0.16], [0.72, 0.13], [0.9, 0.08], [1, 0.03]],
    lift: [[0, 0], [0.5, 0.01], [1, 0.02]],
    dorsal: [0.28, 0.72, 0.16, 0.06], anal: [0.22, 0.62, 0.1],
    pecT: 0.68, pecLen: 0.14, pecSpan: 0.1, eye: 0.034, eyeT: 0.8,
    lobes: 2, tailRoot: 0.1, tailSpread: 1.15, tailLen: 0.34, tailYaw: 0.42, fork: false,
  },
  guppy: {
    x0: -0.16, x1: 0.3, crown: 1, belly: 1.05,
    h: [[0, 0.02], [0.3, 0.055], [0.6, 0.06], [0.85, 0.04], [1, 0.02]],
    w: [[0, 0.012], [0.4, 0.032], [0.75, 0.028], [1, 0.012]],
    lift: [[0, 0], [1, 0.008]],
    dorsal: [0.35, 0.7, 0.045, 0.02], anal: [0.4, 0.72, 0.04],
    pecT: 0.72, pecLen: 0.06, pecSpan: 0.04, eye: 0.02, eyeT: 0.8,
    lobes: 1, tailRoot: 0.05, tailSpread: 1.35, tailLen: 0.32, fork: false,
  },
  tetra: {
    x0: -0.46, x1: 0.44, crown: 1, belly: 1.02,
    h: [[0, 0.018], [0.2, 0.05], [0.5, 0.07], [0.78, 0.05], [1, 0.02]],
    w: [[0, 0.012], [0.35, 0.034], [0.6, 0.032], [1, 0.012]],
    lift: [[0, 0], [1, 0]],
    dorsal: [0.42, 0.68, 0.045, 0.03], anal: [0.48, 0.7, 0.03],
    pecT: 0.7, pecLen: 0.07, pecSpan: 0.045, eye: 0.018, eyeT: 0.84,
    lobes: 1, tailRoot: 0.05, tailSpread: 0.7, tailLen: 0.12, fork: true,
  },
  betta: {
    x0: -0.28, x1: 0.4, crown: 1.05, belly: 1.12,
    h: [[0, 0.035], [0.25, 0.09], [0.5, 0.11], [0.78, 0.08], [1, 0.03]],
    w: [[0, 0.02], [0.4, 0.055], [0.75, 0.045], [1, 0.02]],
    lift: [[0, 0.01], [1, 0.015]],
    dorsal: [0.32, 0.78, 0.2, 0.12], dorsalPow: 0.6, anal: [0.28, 0.75, 0.16],
    pecT: 0.7, pecLen: 0.1, pecSpan: 0.07, eye: 0.026, eyeT: 0.8,
    lobes: 1, tailRoot: 0.12, tailSpread: 1.55, tailLen: 0.42, fork: false,
  },
  angel: {
    x0: -0.22, x1: 0.34, crown: 1.15, belly: 1.2, flat: true,
    h: [[0, 0.05], [0.18, 0.22], [0.42, 0.34], [0.62, 0.3], [0.84, 0.16], [1, 0.05]],
    w: [[0, 0.012], [0.4, 0.028], [0.8, 0.02], [1, 0.01]],
    lift: [[0, 0.02], [0.5, 0.04], [1, 0.02]],
    dorsal: [0.18, 0.72, 0.28, 0.04], anal: [0.2, 0.7, 0.24],
    pecT: 0.62, pecLen: 0.12, pecSpan: 0.1, eye: 0.03, eyeT: 0.72,
    lobes: 1, tailRoot: 0.08, tailSpread: 0.85, tailLen: 0.16, fork: false,
  },
  carp: {
    x0: -0.5, x1: 0.5, crown: 1, belly: 1.1,
    h: [[0, 0.03], [0.15, 0.08], [0.4, 0.13], [0.65, 0.12], [0.88, 0.07], [1, 0.03]],
    w: [[0, 0.02], [0.3, 0.07], [0.55, 0.085], [0.85, 0.05], [1, 0.02]],
    lift: [[0, 0], [1, 0.01]],
    dorsal: [0.32, 0.62, 0.09, 0.04], anal: [0.28, 0.5, 0.06],
    pecT: 0.7, pecLen: 0.12, pecSpan: 0.08, eye: 0.026, eyeT: 0.82,
    lobes: 1, tailRoot: 0.08, tailSpread: 0.95, tailLen: 0.2, fork: true, barbels: 0.07,
  },
  crucian: {
    x0: -0.4, x1: 0.46, crown: 0.96, belly: 1.18,
    h: [[0, 0.035], [0.2, 0.12], [0.48, 0.18], [0.72, 0.14], [1, 0.04]],
    w: [[0, 0.02], [0.4, 0.1], [0.75, 0.07], [1, 0.025]],
    lift: [[0, 0], [1, 0.01]],
    dorsal: [0.34, 0.66, 0.1, 0.03], anal: [0.3, 0.55, 0.07],
    pecT: 0.68, pecLen: 0.11, pecSpan: 0.08, eye: 0.026, eyeT: 0.8,
    lobes: 1, tailRoot: 0.09, tailSpread: 0.8, tailLen: 0.16, fork: true,
  },
  mandarin: {
    x0: -0.42, x1: 0.48, crown: 1.08, belly: 1.12,
    h: [[0, 0.03], [0.18, 0.1], [0.4, 0.16], [0.62, 0.15], [0.86, 0.1], [1, 0.04]],
    w: [[0, 0.02], [0.35, 0.09], [0.7, 0.08], [1, 0.03]],
    lift: [[0, 0], [1, 0.02]],
    dorsal: [0.3, 0.78, 0.16, 0.02], anal: [0.32, 0.66, 0.09],
    pecT: 0.66, pecLen: 0.1, pecSpan: 0.07, eye: 0.024, eyeT: 0.78,
    lobes: 1, tailRoot: 0.08, tailSpread: 0.7, tailLen: 0.14, fork: false,
  },
  perch: {
    x0: -0.48, x1: 0.46, crown: 1.02, belly: 1.06,
    h: [[0, 0.02], [0.2, 0.055], [0.45, 0.08], [0.75, 0.06], [1, 0.025]],
    w: [[0, 0.014], [0.4, 0.04], [0.75, 0.032], [1, 0.014]],
    lift: [[0, 0], [1, 0]],
    dorsal: [0.32, 0.74, 0.07, 0.02], anal: [0.4, 0.62, 0.045],
    pecT: 0.7, pecLen: 0.08, pecSpan: 0.05, eye: 0.02, eyeT: 0.82,
    lobes: 1, tailRoot: 0.055, tailSpread: 0.65, tailLen: 0.13, fork: true,
  },
  cat: {
    x0: -0.62, x1: 0.46, crown: 0.8, belly: 1.05, flat: true,
    h: [[0, 0.02], [0.2, 0.05], [0.55, 0.07], [0.82, 0.06], [1, 0.035]],
    w: [[0, 0.016], [0.25, 0.05], [0.7, 0.09], [0.9, 0.1], [1, 0.04]],
    lift: [[0, -0.005], [1, 0]],
    dorsal: [0.4, 0.58, 0.05, 0.02], anal: [0.15, 0.45, 0.035],
    pecT: 0.72, pecLen: 0.09, pecSpan: 0.06, eye: 0.018, eyeT: 0.86,
    lobes: 1, tailRoot: 0.06, tailSpread: 0.45, tailLen: 0.14, fork: false, barbels: 0.1,
  },
  eel: {
    x0: -0.78, x1: 0.42, crown: 1, belly: 1.02, sway: 0.1, swayFreq: 1.4, n: 42,
    h: [[0, 0.012], [0.15, 0.028], [0.4, 0.04], [0.75, 0.038], [0.92, 0.028], [1, 0.016]],
    w: [[0, 0.01], [0.4, 0.028], [0.8, 0.026], [1, 0.014]],
    lift: [[0, 0], [1, 0.004]],
    dorsal: [0.08, 0.78, 0.028, 0.01], anal: [0.08, 0.72, 0.02],
    pecT: 0.78, pecLen: 0.04, pecSpan: 0.025, eye: 0.014, eyeT: 0.9,
    lobes: 1, tailRoot: 0.03, tailSpread: 0.4, tailLen: 0.08, fork: false,
  },
};

const LOOKS = {
  goldfish: { shape: 'fantail', style: 'goldfish', fin: 'goldfish', authored: true, A: '#e07a28', B: '#fff0c8', C: '#a84820', fA: '#f0a05a', fB: '#fff4d2', iris: '#1a1a1a' },
  guppy: { shape: 'guppy', style: 'guppy', fin: 'guppy', authored: true, A: '#8fd0dc', B: '#f7fbff', C: '#f0a06a', fA: '#f4fbff', fB: '#f08a3c', iris: '#1c1c1c' },
  neon: { shape: 'tetra', style: 'neon', fin: 'neon', authored: true, A: '#d7e4ea', B: '#e23d45', C: '#1ec8e0', fA: '#b7e7ee', fB: '#f4f8f8', iris: '#102028' },
  zebra: { shape: 'tetra', style: 'zebra', fin: 'tone', authored: true, A: '#3e6d92', B: '#e7c56a', C: '#f4efe4', fA: '#d9e6ef', fB: '#f3e2a4', iris: '#1b1b1b' },
  betta: { shape: 'betta', style: 'betta', fin: 'betta', authored: true, A: '#2f4ea8', B: '#8ea4e0', C: '#1a2748', fA: '#3a62c4', fB: '#e25b86', iris: '#111111' },
  angelfish: { shape: 'angel', style: 'angel', fin: 'tone', authored: true, A: '#e7ece3', B: '#2c3a46', C: '#f6f3ea', fA: '#e7ece3', fB: '#9aa4a8', iris: '#f0c14a' },
  koi: { shape: 'carp', style: 'koi', fin: 'tone', authored: true, A: '#f4f1ea', B: '#e2582a', C: '#c9b8a4', fA: '#f6efe4', fB: '#e7b2a0' },
  round: { shape: 'crucian', style: 'tone', fin: 'tone', authored: false, A: '#c5d0c4', B: '#f4f1e6', C: null, fA: '#d5ddd2', fB: '#f7f4ea' },
  slim: { shape: 'perch', style: 'tone', fin: 'tone', authored: false, A: '#8eaea4', B: '#e7efe8', C: '#000000', fA: '#c5d5cc', fB: '#eef3ea' },
  long: { shape: 'cat', style: 'tone', fin: 'tone', authored: false, A: '#8aa0aa', B: '#e4eeea', C: null, fA: '#c5d4d4', fB: '#eef4f2' },
  crucian: { shape: 'crucian', style: 'tone', fin: 'tone', authored: false, A: '#bcc8b6', B: '#f3f6f0', C: null, fA: '#d5e0d4', fB: '#f7faf4' },
  carp: { shape: 'carp', style: 'carp', fin: 'tone', authored: true, A: '#e0b15c', B: '#f8ecd0', C: '#a84b32', fA: '#e7c48a', fB: '#f6d2b0' },
  perch: { shape: 'perch', style: 'tone', fin: 'tone', authored: false, A: '#83a593', B: '#e7f0ea', C: '#3b6058', fA: '#b7cfc4', fB: '#e5efe8' },
  catfish: { shape: 'cat', style: 'mottle', fin: 'tone', authored: true, A: '#6d8293', B: '#c0ced0', C: '#3d4c58', fA: '#8ea0ab', fB: '#d5e3e4' },
  mandarin: { shape: 'mandarin', style: 'mottle', fin: 'tone', authored: true, A: '#a5ad6b', B: '#e7ecd4', C: '#4f644f', fA: '#c5c896', fB: '#eef2d8' },
  eel: { shape: 'eel', style: 'eel', fin: 'tone', authored: true, A: '#3f636c', B: '#d5ebe0', C: '#76949a', fA: '#6d9096', fB: '#d7ebe2' },
  reed: { shape: 'crucian', style: 'tone', fin: 'tone', authored: false, A: '#87ad91', B: '#f4efd9', C: null, fA: '#c5d7c4', fB: '#f7f3e4' },
  sand: { shape: 'crucian', style: 'mottle', fin: 'tone', authored: true, A: '#ce8765', B: '#f8ead4', C: '#a85a3c', fA: '#e2b498', fB: '#fbeede' },
  ivory: { shape: 'perch', style: 'tone', fin: 'tone', authored: false, A: '#e4dfd1', B: '#f7f6f1', C: null, fA: '#d9d4c6', fB: '#fbfaf6' },
  gold: { shape: 'carp', style: 'tone', fin: 'tone', authored: false, A: '#d5b46a', B: '#fcf2cf', C: null, fA: '#e6d7a2', fB: '#fff6df' },
  ink: { shape: 'cat', style: 'mottle', fin: 'tone', authored: true, A: '#5c6e6a', B: '#dfe6dc', C: '#2e3a36', fA: '#7d908a', fB: '#e7eee6' },
  dawn: { shape: 'carp', style: 'tone', fin: 'tone', authored: false, A: '#c08f9a', B: '#f6e7c7', C: null, fA: '#e2c2c4', fB: '#fbf0dc' },
};

export const FISH_SPECS = {
  reed: { id: 'reed', color: '#87ad91', accent: '#f4efd9', form: 'round' },
  sand: { id: 'sand', color: '#ce8765', accent: '#f8ead4', form: 'round' },
  ivory: { id: 'ivory', color: '#e4dfd1', accent: '#6d8779', form: 'slim' },
  gold: { id: 'gold', color: '#d5b46a', accent: '#fcf2cf', form: 'koi' },
  ink: { id: 'ink', color: '#6b7e7a', accent: '#e1e6da', form: 'long' },
  dawn: { id: 'dawn', color: '#c08f9a', accent: '#f6e7c7', form: 'koi' },
  crucian: { id: 'crucian', color: '#bcc8b6', accent: '#6c8479', form: 'round' },
  carp: { id: 'carp', color: '#cba25c', accent: '#ad6549', form: 'koi' },
  perch: { id: 'perch', color: '#83a593', accent: '#3b6058', form: 'slim' },
  catfish: { id: 'catfish', color: '#6d8293', accent: '#c0ced0', form: 'long' },
  mandarin: { id: 'mandarin', color: '#a5ad6b', accent: '#4f644f', form: 'round' },
  eel: { id: 'eel', color: '#76949a', accent: '#d3e5d6', form: 'long' },
  goldfish: { id: 'goldfish', color: '#e99b45', accent: '#fff1c5', scientific: 'Carassius auratus', form: 'round' },
  guppy: { id: 'guppy', color: '#79b9cd', accent: '#f09755', scientific: 'Poecilia reticulata', form: 'slim' },
  neon: { id: 'neon', color: '#42bfda', accent: '#e35356', scientific: 'Paracheirodon innesi', form: 'slim' },
  zebra: { id: 'zebra', color: '#779ab5', accent: '#f2d999', scientific: 'Danio rerio', form: 'slim' },
  betta: { id: 'betta', color: '#496ec9', accent: '#bf577d', scientific: 'Betta splendens', form: 'koi' },
  angelfish: { id: 'angelfish', color: '#d4d9cb', accent: '#48596b', scientific: 'Pterophyllum scalare', form: 'round' },
};

export const STUDIO_IDS = Object.keys(LOOKS);

export function createStudioFish(id) {
  const look = LOOKS[id];
  if (!look) throw new Error('Unknown studio fish: ' + id);
  const shape = SHAPES[look.shape];
  const palette = [hex(look.A), hex(look.B), look.C ? hex(look.C) : null];
  const finA = hex(look.fA);
  const finB = hex(look.fB);
  const group = new THREE.Group();
  group.name = 'studio-fish-' + id;
  group.userData.studio = true;
  group.userData.species = id;
  group.userData.phase = 0;
  group.userData.swimRate = 1;
  const finMat = fishMaterial({ name: 'FinPearl_studio', alpha: 0.9, fin: true, authored: look.authored });
  group.add(buildBody(shape, look.style, palette, look.authored));
  addDorsal(group, shape, look.fin, finA, finB, finMat);
  addAnal(group, shape, look.fin, finA, finB, finMat);
  addPectoral(group, shape, look.fin, finA, finB, finMat);
  addTail(group, shape, look.fin, finA, finB, finMat);
  addEyes(group, shape, look.authored);
  addBarbels(group, shape, look.style, palette, look.authored);
  group.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = false;
      o.receiveShadow = true;
    }
  });
  return group;
}

export function poseStudioFish(root, time, sun) {
  if (!root?.userData?.studio) return;
  const rate = root.userData.swimRate || 1;
  const phase = root.userData.phase || 0;
  root.traverse((o) => {
    const uniforms = o.material?.userData?.swimUniforms;
    if (uniforms) {
      uniforms.uSwim.value = time * rate;
      uniforms.uPhase.value = phase;
      if (sun && uniforms.uSun) uniforms.uSun.value.copy(sun);
    }
    if (o.name === 'PectoralFin') {
      const s = o.userData.side || 1;
      o.rotation.y = s * (0.35 + Math.sin(time * rate * 5.2 + phase) * 0.42);
    }
    if (o.name === 'TailFin') {
      o.rotation.y = Math.sin(time * rate * 4.4 + phase) * 0.32;
      o.rotation.z = Math.sin(time * rate * 2.2 + phase) * 0.05;
    }
  });
}
