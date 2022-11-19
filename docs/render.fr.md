| lang |FR 🇧🇪 | [EN 🇬🇧](/docs/render.en.md) |
|:----:|:-----:|:--------------------:|

# Rendre un fichier JSA

## `render(template, data)`

- `data` | [`String`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#string_type) | `JSON` | `Path` |

Chaîne de caractères qui provient d'un fichier `.JSON`. Cela peut aussi être une variable javascript sous le type JSON. Ou bien encore un chemin d'accès au fichier souhaité.

- `template` | [`String`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#string_type) | `Path` |

Chaîne de caractères en provenance d'un fichier `.JSA`. Il peut être récupéré grâce au module fs de node.

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
var data = readFileSync("./data.json", "utf-8", (err,data)=>{
    if (err) {
        return console.error("La lecture du template à échoué");
    } else {
        return data
    }
});

console.log(render(data, template));
```
