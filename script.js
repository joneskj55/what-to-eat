const meals = [
    {
        "name": "Mac & Cheese",
    },
    {
        "name": "Pizza",
    },
    {
        "name": "Cook Out",
    },
    {
        "name": "Order",
    },
    {
        "name": "Sandwich",
    },
    {
        "name": "Turkey",
    },
    {
        "name": "Chili",
    },
    {
        "name": "Tacos",
    },
    {
        "name": "Spaghetti",
    },
    {
        "name": "Burgers"
    }
];
const showMealName = document.getElementById('meal-name');
//const showMealImage = document.getElementById('meal-image');

function getMeal() {
    const randomMeal = Math.floor(Math.random() * meals.length);
    console.log(meals[randomMeal].name);
    //next steps: 1. add images 2. print name and image to dom 3. HTML, CSS
    showMealName.innerText = meals[randomMeal].name;
    //showMealImage.innerText = meals[randomMeal].image;
}

getMeal();



