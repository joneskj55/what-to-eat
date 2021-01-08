const breakfastImg = document.createElement('img');
const lunchImg = document.createElement('img');
const dinnerImg = document.createElement('img');
let searchedImg = document.createElement('img');

let recipe;
let ingredients;
let modalTitle;

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
            modalTitle = data[randomMeal].name;
            breakfastImg.src = data[randomMeal].image;
            document.getElementById('breakfast-image').appendChild(breakfastImg);
            showBreakfastInstructions();
            getBreakfastRecipe();
        }
    };
    request.send();
}

function getBreakfastRecipe() {
    document.getElementById('recipe-header').innerText = modalTitle;
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
    clearLunchIngredientsList();
    let request = new XMLHttpRequest();
    request.open('GET', 'data/lunch.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('lunch-name').innerText = data[randomMeal].name;
            ingredients = data[randomMeal].ingredients;
            recipe = data[randomMeal].recipe;
            modalTitle = data[randomMeal].name;
            lunchImg.src = data[randomMeal].image;
            document.getElementById('lunch-image').appendChild(lunchImg);
            showLunchInstructions();
            getLunchRecipe();
        }
    };
    request.send();
}

function getLunchRecipe() {
    document.getElementById('lunch-modal-header').innerText = modalTitle;
    document.getElementById('lunch-recipe').innerText = recipe;
    let ul = document.getElementById("lunch-ingredients");
    for (let i = 0; i < ingredients.length; i++) {
        let ingredient = ingredients[i];
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(ingredient));
        ul.appendChild(li);
    }
}

function showLunchRecipe() {
    document.getElementById('lunch-recipe').classList.remove('hidden');
    document.getElementById('lunch-click-instructions').className = 'hidden';
}

function showLunchInstructions() {
    document.getElementById('lunch-click-instructions').classList.remove('hidden');
}

function clearLunchIngredientsList() {
    document.getElementById('lunch-ingredients').innerHTML = "";
}

// DINNER
function getDinner() {
    clearDinnerIngredientsList();
    let request = new XMLHttpRequest();
    request.open('GET', 'data/dinner.json', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            const randomMeal = Math.floor(Math.random() * data.length);
            document.getElementById('dinner-name').innerText = data[randomMeal].name;
            ingredients = data[randomMeal].ingredients;
            recipe = data[randomMeal].recipe;
            modalTitle = data[randomMeal].name;
            dinnerImg.src = data[randomMeal].image;
            document.getElementById('dinner-image').appendChild(dinnerImg);
            showDinnerInstructions();
            getDinnerRecipe();
        }
    };
    request.send();
}

function getDinnerRecipe() {
    document.getElementById('dinner-modal-header').innerText = modalTitle;
    document.getElementById('dinner-recipe').innerText = recipe;
    let ul = document.getElementById("dinner-ingredients");
    for (let i = 0; i < ingredients.length; i++) {
        let ingredient = ingredients[i];
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(ingredient));
        ul.appendChild(li);
    }
}

function showDinnerRecipe() {
    document.getElementById('dinner-recipe').classList.remove('hidden');
    document.getElementById('dinner-click-instructions').className = 'hidden';
}

function showDinnerInstructions() {
    document.getElementById('dinner-click-instructions').classList.remove('hidden');
}

function clearDinnerIngredientsList() {
    document.getElementById('dinner-ingredients').innerHTML = "";
}

// ------------------------ For searching ---------------------------------

let notFound = document.createElement('p');

let searchingData = async e => {
    clearSearch();
    let Data = [];
    e.preventDefault();

    await fetch(`data/breakfast.json`)
        .then(response => response.json())
        .then(data => data.map(dataChunks => {
            Data.push(dataChunks);
        }))

    await fetch(`data/lunch.json`)
        .then(response => response.json())
        .then(data => data.map(dataChunks => {
            Data.push(dataChunks);
        }))

    await fetch(`data/dinner.json`)
        .then(response => response.json())
        .then(data => data.map(dataChunks => {
            Data.push(dataChunks);
        }))

    let SearchedData = document.querySelector('#searchedData').value;
    notFound.innerHTML = "Nothing was found";
    notFound.style.color = 'red';
    notFound.style.display = 'none';
    document.querySelector('form').append(notFound);
    let counter = 0;
    for (let i = 0; i < Data.length; i++) {
        if (SearchedData === Data[i].name.toLowerCase() ||
            SearchedData === Data[i].name.toUpperCase() ||
            SearchedData === Data[i].name) {
            notFound.style.display = 'none';
            document.querySelector('#search-image').style.display = 'block';
            searchedResult(Data[i], SearchedData);
            break;
        } else {
            notFound.style.display = 'none';
            counter++;
            document.querySelector('#search-image').style.display = 'none';
            document.querySelector('#search-click-instructions').classList.add('hidden');

        }
        if (counter === Data.length) {
            notFound.style.display = 'block';
        }
    }

}

let searchedResult = data => {
    clearSearch();
    document.querySelector('#search-click-instructions').classList.remove('hidden');
    document.querySelector('#search-name').textContent = data.name;
    searchedImg.src = data.image;
    searchedImg.alt = "something went wrong";
    document.querySelector('#search-image').append(searchedImg);
    document.querySelector('#searched-recipe-header').innerHTML = data.name;
    let Ol = document.querySelector('#searchedItemIngredients');
    data.ingredients.map(ing => {
        let Li = document.createElement('li');
        Li.innerHTML = ing;
        Ol.append(Li);
    })
    document.querySelector('#search-recipe').innerHTML = data.recipe;
}

let clearSearch = () => {
    document.querySelector('#search-name').textContent = "";
    document.querySelector('#searched-recipe-header').innerHTML = "";
    document.querySelector('#searchedItemIngredients').innerHTML = "";
    document.querySelector('#search-recipe').innerHTML = "";
}

let showSearchedItemRecipe = () => {
    document.getElementById('search-recipe').classList.remove('hidden');
    document.getElementById('search-click-instructions').className = 'hidden';
}


// Get the modal
const modal = document.getElementById("myModal");
const lunchModal = document.getElementById("lunchModal");
const dinnerModal = document.getElementById("dinnerModal");
const searchModal = document.querySelector('#searchModal');

// Get the button that opens the modal
const btn = document.getElementById("breakfast-image");
const lunchBtn = document.getElementById("lunch-image");
const dinnerBtn = document.getElementById("dinner-image");
const searchedRecipeModal = document.querySelector('#search-image');

// Get the <span> element that closes the modal
const searchModalClose = document.getElementsByClassName('close')[0];
const span = document.getElementsByClassName("close")[1];
const lunchSpan = document.getElementsByClassName("close")[2];
const dinnerSpan = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

lunchBtn.onclick = function () {
    lunchModal.style.display = "block";
}

dinnerBtn.onclick = function () {
    dinnerModal.style.display = "block";
}

searchedRecipeModal.onclick = () => {
    searchModal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

lunchSpan.onclick = function () {
    lunchModal.style.display = "none";
}

dinnerSpan.onclick = function () {
    dinnerModal.style.display = "none";
}

searchModalClose.onclick = () => {
    searchModal.style.display = 'none';
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === lunchModal) {
        lunchModal.style.display = "none";
    }
    if (event.target === dinnerModal) {
        dinnerModal.style.display = "none";
    }
    if (event.target === searchModal) {
        searchModal.style.display = 'none';
    }
}

document.querySelector('form').addEventListener('submit', searchingData);
