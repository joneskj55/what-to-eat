const breakfastImg = document.createElement('img');
const lunchImg = document.createElement('img');
const dinnerImg = document.createElement('img');
let ingredients;

function getBreakfast() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/breakfast.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('breakfast-name').innerText = data[randomMeal].name;
            ingredients = data[randomMeal].ingredients;
            breakfastImg.src = data[randomMeal].image;
            document.getElementById('breakfast-image').appendChild(breakfastImg);
            getBreakfastRecipe();
            showBreakfastInstructions();
            hideBreakfastRecipe();
        }
    };
    request.send();
}

function getBreakfastRecipe() {
    document.getElementById('breakfast-recipe').innerText = ingredients;
}

function showBreakfastRecipe() {
    document.getElementById('breakfast-recipe').classList.remove('hidden');
    document.getElementById('breakfast-instructions').className = 'hidden';
}

function hideBreakfastRecipe() {
    document.getElementById('breakfast-recipe').className = 'hidden';
}

function showBreakfastInstructions() {
    document.getElementById('breakfast-instructions').classList.remove('hidden');
}

function getLunch() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/lunch.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('lunch-name').innerText = data[randomMeal].name;
            ingredients = data[randomMeal].ingredients;
            lunchImg.src = data[randomMeal].image;
            document.getElementById('lunch-image').appendChild(lunchImg);
            getLunchRecipe();
            showLunchInstructions();
            hideLunchRecipe();
        }
    };
    request.send();
}

function getLunchRecipe() {
    document.getElementById('lunch-recipe').innerText = ingredients;
}

function showLunchRecipe() {
    document.getElementById('lunch-recipe').classList.remove('hidden');
    document.getElementById('lunch-instructions').className = 'hidden';
}

function hideLunchRecipe() {
    document.getElementById('lunch-recipe').className = 'hidden';
}

function showLunchInstructions() {
    document.getElementById('lunch-instructions').classList.remove('hidden');
}

function getDinner() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/dinner.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('dinner-name').innerText = data[randomMeal].name;
            ingredients = data[randomMeal].ingredients;
            dinnerImg.src = data[randomMeal].image;
            document.getElementById('dinner-image').appendChild(dinnerImg);
            getDinnerRecipe();
            showDinnerInstructions();
            hideDinnerRecipe();
        }
    };
    request.send();
}

function getDinnerRecipe() {
    document.getElementById('dinner-recipe').innerText = ingredients;
}

function showDinnerRecipe() {
    document.getElementById('dinner-recipe').classList.remove('hidden');
    document.getElementById('dinner-instructions').className = 'hidden';
}

function hideDinnerRecipe() {
    document.getElementById('dinner-recipe').className = 'hidden';
}

function showDinnerInstructions() {
    document.getElementById('dinner-instructions').classList.remove('hidden');
}

