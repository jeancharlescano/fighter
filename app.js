import { findAll, findById, UpdatePlayer } from "./utilities/DataBase.js";
import { detectedLevel } from "./utilities/DetetedLevel.js";

import prompts  from 'prompts'

(async () => {

    let AllPlayer = await findAll().then(x => {return x})
    let msgPlayer = ''

    AllPlayer.map(x => {
    console.log("Log ~ file: app.js ~ line 12 ~ x", x)
        msgPlayer += `\n${x.id} : ${x.pseudo} : ${detectedLevel(x.level)}`
    })

    const response = await prompts({
        type: 'text',
        name: 'player',
        message: msgPlayer,
    });
    
    console.log(response);
})();