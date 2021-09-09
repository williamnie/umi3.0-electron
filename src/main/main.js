import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // nodeIntegrationInWorker: true,
      // preload: path.join(__dirname, './public/renderer.js') 这里必须用绝对地址
    }
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:8090/#/');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(`file:${path.join(__dirname, './dist/renderer/index.html')}`)
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
