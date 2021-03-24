const { remote } = require('electron');
const fs = require('fs');
const path = require('path');
const { spawn, exec } = require('child_process');

var created = 0;

function getInfoMob(mobname) {
    getMob(mobname);
}

function getMob(mobname) {
    try {
        if (created > 0) {
            $('#mobEquip > tbody').empty();
            $('#mobCarry > tbody').empty();
            created = true;
        }
        const pythonProcess = spawn('python', ['./src/structs.py', mobname]);
        pythonProcess.stdout.on('data', (data) => {
            var npc = data.toString();
            npc = JSON.parse(npc);
            var mobCarry = document.querySelector('#mobCarry > tbody');
            var mobEquip = document.querySelector('#mobEquip > tbody');

            Object.values(npc.Carry).forEach((value, key) => {
                if (!(value.sIndex == 0 || value.sIndex == '0')) {
                    var tr = document.createElement('tr');
    
                    var td = document.createElement('td');
                    var content = document.createTextNode(key + 1);
                    td.appendChild(content);
    
                    var td2 = document.createElement('td');
                    var content2 = document.createTextNode(value.code);
                    td2.appendChild(content2);
    
                    var td3 = document.createElement('td');
                    var content3 = document.createTextNode(value.name);
                    td3.appendChild(content3);
    
                    tr.appendChild(td);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    mobCarry.appendChild(tr);
                }
                    
            });

            Object.values(npc.Equip).forEach((value, key) => {
                if (!(value.sIndex == 0 || value.sIndex == '0')) {
                    var tr = document.createElement('tr');

                    var td = document.createElement('td');
                    var content = document.createTextNode(key + 1);
                    td.appendChild(content);

                    var td2 = document.createElement('td');
                    var content2 = document.createTextNode(value.code);
                    td2.appendChild(content2);

                    var td3 = document.createElement('td');
                    var content3 = document.createTextNode(value.name);
                    td3.appendChild(content3);

                    tr.appendChild(td);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    mobEquip.appendChild(tr);
                }
            });

            $('#mobEquip').DataTable();
            $('#mobCarry').DataTable();

            created++;
        });
        
    } catch (err) {
        console.log(err);
    }
}   