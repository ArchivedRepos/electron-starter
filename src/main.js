import app from 'app';
import BrowserWindow from 'browser-window';
import * as path from 'path';
import * as cp from 'child_process';


const squirrel = (args, done) => {
  var updateDotExe = path.resolve(path.dirname(process.execPath),
                                  '..', 'update.exe');
  var child = cp.spawn(updateDotExe, args, { detatched: true });
  child.on('close', function(code) {
    done();
  });
};

let installing = false;

const handleStartupEvent = () => {
  if (process.platform !== 'win32') {
    return false;
  }

  const squirrelCommand = process.argv[1];

  const target = path.basename(process.execPath);

  switch(squirrelCommand) {
    case '--squirrel-install':
    case '--squirrel-updated':
      installing = true;
      squirrel(['--createShortcut', target], app.quit);
    return true;
    case '--squirrel-uninstall':
      installing = true;
      squirrel(['--removeShortcut', target], app.quit);
    return true;
    case '--squirrel-obsolte':
      installing = true;
      app.quit();
    return true;
  }
}

handleStartupEvent();

const update = () => {
  squirrel(['--update', 'UPDATE_URL'],
          () => 0);
}

if (!process.env.BROWSER_SYNC_CLIENT_URL) {
  update();
}

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit(0);
  }
});

if (!installing) {
  app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 1200, height: 800 });
    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    if (process.env.BROWSER_SYNC_CLIENT_URL) {
      mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => mainWindow = null);
  });
}
