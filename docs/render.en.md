| lang |[FR 🇧🇪](/docs/render.fr.md) | EN 🇬🇧 |
|:----:|:-----:|:--------------------:|

# Render a JSA file

## render `render(template, data)`

- `template` [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | String from a `.JSA` file. It can be retrieved using the fs module of node.
- `data` [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) | `JSON` | String that comes from a `.JSON` file. It can also be a javascript variable under the JSON type.

## Example of a JSA rendering

```JS
import { render } from "JSA"
import { readFileSync } from "node:fs"

var template = readFileSync("./template/test.jsa", "utf-8", (err,data)=>{
    if (err) {
        return console.error("The reading of the template failed");
    } else {
        return data
    }
})
var data = JSON.parse(readFileSync("./data.json", "utf-8", (err,data)=>{
    if (err) {
        return console.error("The reading of the template failed");
    } else {
        return data
    }
}));

console.log(render(template, data));
```
