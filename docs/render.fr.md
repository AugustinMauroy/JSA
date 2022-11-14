| lang |FR 🇧🇪 | [EN 🇬🇧](/docs/render.en.md) |
|:----:|:-----:|:--------------------:|

# Rendre un fichier JSA

## render `render(template, data)`

- `template` [`String`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#string_type) | Chaîne de caractère en provenance d'un fichier `.JSA`. Il peut être récupère grâce au module fs de node.
- `data` [`String`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#string_type) | `JSON` | Chaîne de caractère qui provient d'un fichier `.JSON`. Cela peu aussi être une variable javascript sous le type JSON.

## Exemple de render de JSA

```JS
import { render } from "JSA"
import { readFileSync } from "node:fs"

var template = readFileSync("./template/test.jsa", "utf-8", (err,data)=>{
    if (err) {
        return console.error("La lecture du template à échoué");
    } else {
        return data
    }
})
var data = JSON.parse(readFileSync("./data.json", "utf-8", (err,data)=>{
    if (err) {
        return console.error("La lecture du template à échoué");
    } else {
        return data
    }
}));

console.log(render(template, data));
```
