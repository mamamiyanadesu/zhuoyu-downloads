const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('qingchiWallpaper',Object.freeze({subscribe:callback=>ipcRenderer.on('qc:pond',(_e,value)=>callback(value))}));
