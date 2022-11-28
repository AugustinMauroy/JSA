const bannerList_en = [
    {
        "id": "1",
        "title": "We support Ukraine 🇺🇦.",
        "description": "<a href=\"https://www.unicef.org/ukraine/en\">Support for parents and children during war</a>"
    },{
        "id": "2",
        "title": "New JSalpha markdown releases",
        "description": "<a href=\"https://github.com/AugustinMauroy/JSA-Markdown\">More information</a>"
    }
]
const bannerList_fr = [
    {
        "id": "1",
        "title": "Nous soutenons l'Ukraine 🇺🇦.",
        "description": "<a href=\"https://www.unicef.org/ukraine/en\">Soutien aux parents et aux enfants pendant la guerre</a>"
    },{
        "id": "2",
        "title": "Nouvelles versions de JSalpha markdown",
        "description": "<a href=\"https://github.com/AugustinMauroy/JSA-Markdown\">Pour plus d'information</a>"
    }
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function bannerDisplay(lang){
    const header = document.getElementById("banner");
    let bannerLenght = eval(`bannerList_${lang}.length`);
    let id = getRandomInt(bannerLenght)
    header.innerHTML = `
        <h2>${eval(`bannerList_${lang}[id].title`)}</h2>
        <p>${eval(`bannerList_${lang}[id].description`)}</p>
    `;

};

function codeCopy(code){
    navigator.clipboard.writeText(code);
}
