const breakfastImg = document.createElement('img');
const lunchImg = document.createElement('img');
const dinnerImg = document.createElement('img');
let recipe;
let ingredients;

function getBreakfast() {
    clearIngredientsList();
    let request = new XMLHttpRequest();
    request.open('GET', 'data/breakfast.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('breakfast-name').innerText = data[randomMeal].name;
            ingredients = data[randomMeal].ingredients;
            recipe = data[randomMeal].recipe;
            breakfastImg.src = data[randomMeal].image;
            document.getElementById('breakfast-image').appendChild(breakfastImg);
            showBreakfastInstructions();
            getBreakfastRecipe();
        }
    };
    request.send();
}

function getBreakfastRecipe() {
    document.getElementById('breakfast-recipe').innerText = recipe;
    let ul = document.getElementById("ingredients");
    for (let i = 0; i < ingredients.length; i++) {
        let ingredient = ingredients[i];
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(ingredient));
        ul.appendChild(li);
    }
}

function showBreakfastRecipe() {
    document.getElementById('breakfast-recipe').classList.remove('hidden');
    document.getElementById('breakfast-click-instructions').className = 'hidden';
}

function showBreakfastInstructions() {
    document.getElementById('breakfast-click-instructions').classList.remove('hidden');
}

function clearIngredientsList() {
    document.getElementById('ingredients').innerHTML = "";
}

// LUNCH
function getLunch() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/lunch.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('lunch-name').innerText = data[randomMeal].name;
            recipe = data[randomMeal].recipe;
            lunchImg.src = data[randomMeal].image;
            document.getElementById('lunch-image').appendChild(lunchImg);
            showLunchInstructions();
            getLunchRecipe();
            hideLunchRecipe();
        }
    };
    request.send();
}

function getLunchRecipe() {
    document.getElementById('lunch-recipe').innerText = recipe;
}

function showLunchRecipe() {
    document.getElementById('lunch-recipe').classList.remove('hidden');
    document.getElementById('lunch-click-instructions').className = 'hidden';
}

function hideLunchRecipe() {
    document.getElementById('lunch-recipe').className = 'hidden';
}

function showLunchInstructions() {
    document.getElementById('lunch-click-instructions').classList.remove('hidden');
}

// DINNER
function getDinner() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data/dinner.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('dinner-name').innerText = data[randomMeal].name;
            recipe = data[randomMeal].recipe;
            dinnerImg.src = data[randomMeal].image;
            document.getElementById('dinner-image').appendChild(dinnerImg);
            showDinnerInstructions();
            getDinnerRecipe();
            hideDinnerRecipe();
        }
    };
    request.send();
}

function getDinnerRecipe() {
    document.getElementById('dinner-recipe').innerText = recipe;
}

function showDinnerRecipe() {
    document.getElementById('dinner-recipe').classList.remove('hidden');
    document.getElementById('dinner-click-instructions').className = 'hidden';
}

function hideDinnerRecipe() {
    document.getElementById('dinner-recipe').className = 'hidden';
}

function showDinnerInstructions() {
    document.getElementById('dinner-click-instructions').classList.remove('hidden');
}

// Get the breakfast modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("breakfast-image");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

