import { var_gen } from "./var_gen.js"

function render(insertJSA, data){
    let result = eval(`${var_gen(data)}\`${insertJSA}\``)
    return result;
}

export { render }