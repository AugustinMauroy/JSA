function var_gen(data){
    var result = ``
    for (var key in data) {
        var var_content = `data.${key}`
        result += `var ${key} = ${var_content};\n`;
    }
    return result
}

export { var_gen }
