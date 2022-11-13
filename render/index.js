function render(insertJSA, obj){
    let data = JSON.parse(obj);
    let result = eval(`\`${insertJSA}\``)
    return result;
}

export { render }