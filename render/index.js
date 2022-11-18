import fs from "node:fs"
import { varGen } from "./varGen.js"

const isPath = new RegExp ("^(.+)\/([^\/]+)$");

export function render(data, template){
    if(isPath.test(data)){
        var data = fs.readFileSync(data, "utf-8", (err,data)=>{
            if (err) {
                throw err
            } else {
                return data
            }
        })
    }
    if(isPath.test(template)){
        var template = fs.readFileSync(template, "utf-8", (err,data)=>{
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
