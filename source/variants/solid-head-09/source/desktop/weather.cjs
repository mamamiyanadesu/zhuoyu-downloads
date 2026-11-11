'use strict';
const https=require('node:https');
const CURRENT='temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,wind_speed_10m';
function location(v){if(!v||typeof v.label!=='string'||v.label.length>80||!Number.isFinite(v.latitude)||Math.abs(v.latitude)>90||!Number.isFinite(v.longitude)||Math.abs(v.longitude)>180)throw Error('城市位置无效');return {label:v.label,latitude:Math.round(v.latitude*100)/100,longitude:Math.round(v.longitude*100)/100};}
function get(url){return new Promise((resolve,reject)=>{const req=https.get(url,{timeout:15000,headers:{'User-Agent':'Qingchi-Penglai-Trial/0.4'}},res=>{if(res.statusCode!==200){res.resume();reject(Error('天气服务返回 HTTP '+res.statusCode));return;}let text='';res.setEncoding('utf8');res.on('data',b=>{text+=b;if(text.length>250000){req.destroy(Error('天气响应过大'));}});res.on('end',()=>{try{resolve(JSON.parse(text));}catch{reject(Error('天气响应不是有效 JSON'));}});});req.on('timeout',()=>req.destroy(Error('天气请求超时，仍可离线钓鱼')));req.on('error',reject);});}
function describe(code){return code===0?'晴':code<=3?'多云':code<=48?'雾':code<=67?'雨':code<=77?'雪':code<=82?'阵雨':code<=86?'阵雪':'雷雨';}
function normalize(raw,place,now=Date.now()){
 const c=raw?.current;if(!c||!Number.isFinite(c.temperature_2m)||!Number.isInteger(c.weather_code)||!Number.isFinite(c.wind_speed_10m)||![0,1].includes(c.is_day)||typeof c.time!=='string')throw Error('天气响应缺少必要字段');
 const at=Date.parse(c.time+'+08:00');if(!Number.isFinite(at)||now-at>3*3600000||at-now>3600000)throw Error('天气时间过期或异常，不作为当前天气应用');
 const code=c.weather_code,kind=([71,73,75,77,85,86].includes(code)?'snow':code>=51?'rain':code>=1?'cloudy':'clear');
 return {location:location(place),provider:'Open-Meteo',source:'联网天气模型估算，不是现场传感器',observedAt:c.time+'+08:00',fetchedAt:now,temperature:c.temperature_2m,feelsLike:c.apparent_temperature??null,humidity:c.relative_humidity_2m??null,wind:c.wind_speed_10m,code,description:describe(code),weather:kind,isDay:!!c.is_day,precipitation:c.precipitation??0,cloud:c.cloud_cover??0};
}
function createWeather(){let cache=null,inflight=null,lastAttempt=0;return {
 async current(input){const p=location(input),key=JSON.stringify(p);if(cache?.key===key&&Date.now()-cache.value.fetchedAt<600000)return {...cache.value,cached:true};if(inflight)throw Error('正在查询天气，请稍后再试');if(Date.now()-lastAttempt<5000)throw Error('请稍后再刷新');lastAttempt=Date.now();inflight=(async()=>{const q=new URLSearchParams({latitude:p.latitude,longitude:p.longitude,current:CURRENT,timezone:'Asia/Shanghai',forecast_days:1});const raw=await get('https://api.open-meteo.com/v1/forecast?'+q);const value=normalize(raw,p);cache={key,value};return {...value,cached:false};})();try{return await inflight;}finally{inflight=null;}},
 async search(query){if(typeof query!=='string'||query.trim().length<2||query.length>50)throw Error('请输入 2–50 字城市名');const q=new URLSearchParams({name:query.trim(),count:8,language:'zh',countryCode:'CN'});const r=await get('https://geocoding-api.open-meteo.com/v1/search?'+q);return (r.results||[]).map(v=>location({label:[v.admin1,v.admin2,v.name].filter(Boolean).join(' · '),latitude:v.latitude,longitude:v.longitude}));},inspect:()=>cache?.value||null
};}
module.exports={createWeather,normalize,location,describe};
