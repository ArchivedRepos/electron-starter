import app from 'app';
import BrowserWindow from 'browser-window';

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit(0);
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 1200, height: 800});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => mainWindow = null);
});
