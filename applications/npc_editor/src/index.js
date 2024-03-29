const { app, BrowserWindow } = require('electron');
const ejse = require('ejs-electron');
const path = require('path');
const fs = require('fs');

var moblist = [];

fs.readdir(path.join(__dirname, '/data/npc/'), (err, files) => {
    files.forEach(file => {
        moblist.push(file);
    });
});

ejse.data({
    moblist: moblist,
});

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable: true,
        webPreferences: {
            preload: './preload.js',
            enableRemoteModule  : true,
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadURL('file://' + __dirname + '/ui/index.ejs');

    //mainWindow.webContents.openDevTools();

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });
};

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});