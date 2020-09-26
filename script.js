const breakfastImg = document.createElement('img');
const lunchImg = document.createElement('img');
const dinnerImg = document.createElement('img');

function getBreakfast() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/breakfast.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('breakfast-name').innerText = data[randomMeal].name;
            breakfastImg.src = data[randomMeal].image;
            document.getElementById('breakfast-image').appendChild(breakfastImg);
        }
    };
    request.send();
    window.reload(false); // this stops that ugly reloading
    document.getElementById('breakfast-image').removeChild(breakfastImg);
}

function getLunch() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/lunch.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('lunch-name').innerText = data[randomMeal].name;
            lunchImg.src = data[randomMeal].image;
            document.getElementById('lunch-image').appendChild(lunchImg);
        }
    };
    request.send();
    window.reload(false);
    document.getElementById('lunch-image').removeChild(lunchImg);
}

function getDinner() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/dinner.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('dinner-name').innerText = data[randomMeal].name;
            dinnerImg.src = data[randomMeal].image;
            document.getElementById('dinner-image').appendChild(dinnerImg);
        }
    };
    request.send();
    window.reload(false);
    document.getElementById('dinner-image').removeChild(dinnerImg);
}


