import fs from "node:fs"
import { var_gen } from "./var_gen.js"

function render(insertJSA, data){
    if(ispath.test(insertJSA) === true){
        var insertJSA = fs.readFileSync(insertJSA, "utf-8", (err,data)=>{
            if (err) {
                throw err
            } else {
                return data
            }
        })
    }
    if(ispath.test(data) === true){
        var data = fs.readFileSync(data, "utf-8", (err,data)=>{
            if (err) {
                throw err
            } else {
                return data
            }
        })
    }

    let result = eval(`${var_gen(data)}\`${insertJSA}\``)
    return result;
}

const ispath = new RegExp ("^(.+)\/([^\/]+)$");

export { render }
