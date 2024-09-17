import { GlobalKeyboardListener } from "node-global-key-listener"
import { light } from "./communication"
import * as config from "../config.json"

const gkl = new GlobalKeyboardListener()

const keyFunctions: any = {
    "F15": "up",
    "F16": "all",
    "F17": "down"
}

gkl.addListener(function (e, down) {
    if(config.debug) console.log(`${e.name} ${e.state == "DOWN" ? "DOWN" : "UP  "} [${e.rawKey._nameRaw}]`)
})

gkl.addListener(function (e, down) {
    if (e.state == "DOWN" && Object.keys(keyFunctions).includes(e.name)) {
        light(keyFunctions[(e.name.toString())])
    }
})