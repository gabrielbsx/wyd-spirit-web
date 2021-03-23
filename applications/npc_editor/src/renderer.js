const fs = require('fs');
const path = require('path');

function getInfoMob(mobname) {
    console.log(mobname);
    getMob(mobname);
}

function getMob(mobname) {
    try {
        const mob = fs.readFileSync(path.join(__dirname, '../data/npc/' + mobname));
        console.log(mob);
    } catch (err) {
        console.log(err);
        alert(err.toString());
    }
}