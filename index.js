function codeCopy(code){
    navigator.clipboard.writeText(code);
}

const bannerList = [
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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function bannerDisplay(){
    const header = document.getElementById("banner");
    console.log(header);
    let id = getRandomInt(bannerList.length)
    header.innerHTML = `
        <h2>${bannerList[id].title}</h2>
        <p>${bannerList[id].description}</p>
    `;

};
