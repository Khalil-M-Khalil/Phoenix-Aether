const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('aetherDesktop', {
  pickFiles: () => ipcRenderer.invoke('aether:pick-files'),
  pickFolder: () => ipcRenderer.invoke('aether:pick-folder'),
  pickFile: () => ipcRenderer.invoke('aether:pick-file'),
  readChunk: (token, index, chunkBytes) => ipcRenderer.invoke('aether:read-chunk', { token, index, chunkBytes }),
  releaseFile: (token) => ipcRenderer.invoke('aether:release-file', token),
  saveFile: (payload) => ipcRenderer.invoke('aether:save-file', payload),
  openExternal: (url) => ipcRenderer.invoke('aether:open-external', url),
  renderQr: (payload) => ipcRenderer.invoke('aether:qr-data-url', payload),
  platform: process.platform
});
