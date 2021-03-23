const { remote } = require('electron');
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;

function getInfoMob(mobname) {
    var window = remote.getCurrentWindow();
    console.log(mobname);
}

function getMob(mobname) {
    try {
        const pythonProcess = spawn('python', [__dirname + '../structs.py', mobname]);

    } catch (err) {
        console.log(err);
    }
}   