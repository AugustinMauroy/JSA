const isValidObject = (data) => {
    try {
      JSON.parse(data)
      return true
    } catch {
      return false
    }
  }

export function varGen(data){
    if(typeof data === `string`){
        if(isValidObject(data) === true){
        data = JSON.parse(data);
        } else {
            console.error("\x1b[31m", "Error: Your data isn't an valid JSON", "\x1b[0m");
            return ''
        }
    };

    let result = ``
    for (let key in data) {
        let var_content = eval(`data.${key}`)
        result += `let ${key} = \`${var_content}\`;\n`;
    }
    
    return result
}
