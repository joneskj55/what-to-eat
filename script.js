function getBreakfast() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/breakfast.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('breakfast-name').innerText = data[randomMeal].name;
            let img = document.createElement('img');
            img.src = data[randomMeal].image;
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
            document.getElementById('lunch-name').innerText = data[randomMeal].name;
            let img = document.createElement('img');
            img.src = data[randomMeal].image;
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
            document.getElementById('dinner-name').innerText = data[randomMeal].name;
            let img = document.createElement('img');
            img.src = data[randomMeal].image;
            document.getElementById('dinner-image').appendChild(img);
        }
    };
    request.send();
}


