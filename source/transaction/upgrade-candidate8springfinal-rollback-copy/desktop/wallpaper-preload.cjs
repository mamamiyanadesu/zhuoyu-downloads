const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('qingchiWallpaper',Object.freeze({clearSample:process.argv.includes('--qingchi-clear-art-sample=1'),subscribe:callback=>ipcRenderer.on('qc:pond',(_e,value)=>callback(value))}));
