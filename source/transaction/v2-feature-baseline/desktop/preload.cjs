const {contextBridge}=require('electron');
contextBridge.exposeInMainWorld('qingchiDesktop',Object.freeze({version:'0.1.0',platform:process.platform,mode:'window-prototype'}));
