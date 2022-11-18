| lang |[FR 🇧🇪](/docs/render.fr.md) | EN 🇬🇧 |
|:----:|:-----:|:--------------------:|

# Render a JSA file

## `render(data, template)`

- `data` [`String`](https://developer.mozilla.org/en_us/docs/Web/JavaScript/Data_structures#string_type) | `JSON` | `Path` |

String that comes from a `.JSON` file. It can also be a javascript variable under the JSON type. Or a path to the desired file.

- `template` [`String`](https://developer.mozilla.org/en _us/docs/Web/JavaScript/Data_structures#string_type) | `Path` |

String from a `.JSA` file. It can be retrieved using the node fs module.

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
var data = readFileSync("./data.json", "utf-8", (err,data)=>{
    if (err) {
        return console.error("The reading of the template failed");
    } else {
        return data
    }
});

console.log(render(data, template));
```
