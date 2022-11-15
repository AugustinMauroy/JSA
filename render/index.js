import fs from "node:fs"
import { varGen } from "./varGen.js"

const isPath = new RegExp ("^(.+)\/([^\/]+)$");

export function render(template, data){
    if(isPath.test(template) === true){
        var template = fs.readFileSync(template, "utf-8", (err,data)=>{
            if (err) {
                throw err
            } else {
                return data
            }
        })
    } 
    if(isPath.test(data) === true){
        var data = fs.readFileSync(data, "utf-8", (err,data)=>{
            if (err) {
                throw err
            } else {
                return data
            }
        })
    }

    let result = eval(`${varGen(data)}\`${template}\``)
    return result;
}
