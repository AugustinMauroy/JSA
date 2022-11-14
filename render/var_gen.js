function var_gen(data){
    if(typeof data === `string`){
       data = JSON.parse(data);
    };

    var result = ``
    for (var key in data) {
        var var_content = eval(`data.${key}`)
        result += `var ${key} = "${var_content}";\n`;
    }
    console.log(result);
    return result
}


export { var_gen }
