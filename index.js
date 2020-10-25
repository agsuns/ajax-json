let pageCounter = 1;
let actionButton = document.querySelector(".request");
let divElement = document.querySelector(".content")

function renderHTML (jsonData) {
    let htmlString = "";

    for (let i = 0; i < jsonData.length; i++) {
        htmlString += `<p> ${jsonData[i].name} is a ${jsonData[i].species}`

        for (let j = 0; j < jsonData[i].foods.likes.length; j++) {
            if (j === 0) {
                htmlString += ` that likes to eat ${jsonData[i].foods.likes[j]}`;
            } else {
                htmlString += ` and ${jsonData[i].foods.likes[j]}`
            }
        }

        htmlString += '.</p>'
    }

    divElement.insertAdjacentHTML('beforeend', htmlString);
}

actionButton.addEventListener("click", function(e) {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
    ourRequest.onload = function () {
    //console.log(ourRequest.responseText);
    let ourData = JSON.parse(ourRequest.responseText);

    renderHTML(ourData);
    pageCounter++;
    if (pageCounter > 3) {
        actionButton.classList.add("hide-me");
    }
}

ourRequest.send();
});



