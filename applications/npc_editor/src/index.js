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
        width: 800,
        height: 600,
        frame: false,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, '/preload.js'),
            enableRemoteModule  : true,
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL('file://' + __dirname + '/ui/index.ejs');

    mainWindow.on('ready-t  o-show', () => {
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