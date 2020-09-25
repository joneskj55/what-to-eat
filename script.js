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

function getMeal() {
    const randomMeal = Math.floor(Math.random() * meals.length);
    console.log(meals[randomMeal].name);
    //next steps: 1. add images 2. print name and image to dom 3. HTML, CSS
}

getMeal();



