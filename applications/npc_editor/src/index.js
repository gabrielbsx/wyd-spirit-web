const { app, BrowserWindow } = require('electron');
const path = require('path');


const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        },
    });

    mainWindow.loadFile(path.join(__dirname, 'ui/index.html'));

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