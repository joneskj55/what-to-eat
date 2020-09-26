const showBreakfastName = document.getElementById('breakfast-name');
const showBreakfastImage = document.getElementById('breakfast-image');
const showLunchName = document.getElementById('lunch-name');
const showLunchImage = document.getElementById('lunch-image');
const showDinnerName = document.getElementById('dinner-name');
const showDinnerImage = document.getElementById('dinner-image');

function getBreakfast() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/breakfast.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            showBreakfastName.innerText = data[randomMeal].name;
            let img = document.createElement('img');
            img.src = showBreakfastImage.innerText = data[randomMeal].image;
            document.getElementById('breakfast-image').appendChild(img);
        }
    };
    request.send();
}

function getLunch() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/lunch.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            showLunchName.innerText = data[randomMeal].name;
            let img = document.createElement('img');
            img.src = showLunchImage.innerText = data[randomMeal].image;
            document.getElementById('lunch-image').appendChild(img);
        }
    };
    request.send();
}

function getDinner() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/dinner.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            showDinnerName.innerText = data[randomMeal].name;
            let img = document.createElement('img');
            img.src = showDinnerImage.innerText = data[randomMeal].image;
            document.getElementById('dinner-image').appendChild(img);
        }
    };
    request.send();
}


