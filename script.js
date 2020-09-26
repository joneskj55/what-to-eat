const breakfastMeals = [
    {
        "name": "Mac & Cheese",
        "image": "../avocado-toast.jpg"
    },
    {
        "name": "Pizza",
        "image": "veggies.jpg"
    },
    {
        "name": "Cook Out",
        "image": "noodles.jpg"
    },
    // {
    //     "name": "Order",
    // },
    // {
    //     "name": "Sandwich",
    // },
    // {
    //     "name": "Turkey",
    // },
    // {
    //     "name": "Chili",
    // },
    // {
    //     "name": "Tacos",
    // },
    // {
    //     "name": "Spaghetti",
    // },
    // {
    //     "name": "Burgers"
    // }
];
const lunchMeals = [
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
const dinnerMeals = [
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

const showBreakfastName = document.getElementById('breakfast-name');
const showBreakfastImage = document.getElementById('breakfast-image');
const showLunchName = document.getElementById('lunch-name');
const showLunchImage = document.getElementById('lunch-image');
const showDinnerName = document.getElementById('dinner-name');
const showDinnerImage = document.getElementById('dinner-image');

function getBreakfast() {
    const randomMeal = Math.floor(Math.random() * breakfastMeals.length);
    showBreakfastName.innerText = breakfastMeals[randomMeal].name;
    showBreakfastImage.innerText = breakfastMeals[randomMeal].image;
}

function getLunch() {
    const randomMeal = Math.floor(Math.random() * lunchMeals.length);
    showLunchName.innerText = lunchMeals[randomMeal].name;
    showLunchImage.innerText = lunchMeals[randomMeal].image;
}

function getDinner() {
    const randomMeal = Math.floor(Math.random() * dinnerMeals.length);
    showDinnerName.innerText = dinnerMeals[randomMeal].name;
    showDinnerImage.innerText = dinnerMeals[randomMeal].image;
}


