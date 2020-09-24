const recipes = [
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

function getRecipe() {
    const randomRecipe = Math.floor(Math.random() * recipes.length);
    console.log(recipes[randomRecipe].name);
    //next steps: 1. add images 2. print name and image to dom 3. HTML, CSS
}

getRecipe();



