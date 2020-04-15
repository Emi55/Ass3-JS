const menu = [
  {
    title: "Menu 1",
    soup: "Minestrone",
    soupPrice: "2.85",
    salad: "Greek",
    saladPrice: "4.50",
    lighterFare: "Vegetable Biryani",
    lighterFarePrice: "5.00",
    entree: "Breaded Chicken on a Bun",
    entreePrice: "6.00",
  },
  {
    title: "Menu 2",
    soup: "Red Lentil Dal",
    soupPrice: "3.95",
    salad: "Julienne",
    saladPrice: "3.75",
    lighterFare: "Madras Chicken Salad Wrap",
    lighterFarePrice: "5.95",
    entree: "Fish & Chips",
    entreePrice: "6.50",
  },
  {
    title: "Menu 3",
    soup: "Spicy Squash & Pumpkin",
    soupPrice: "3.00",
    salad: "Mediterranean",
    saladPrice: "3.95",
    lighterFare: "Ham & Cheese Panini",
    lighterFarePrice: "5.25",
    entree: "Butter Chicken with Rice Pilaf",
    entreePrice: "6.25",
  },
  {
    title: "Menu 4",
    soup: "Clam Chowder",
    soupPrice: "3.25",
    salad: "Israeli Couscous & Feta",
    saladPrice: "4.75",
    lighterFare: "Pulled Pork on a Bun",
    lighterFarePrice: "5.25",
    entree: "Matar Paneer & Basmati Rice",
    entreePrice: "6.50",
  },
  {
    title: "Menu 5",
    soup: "Tomato",
    soupPrice: "2.95",
    salad: "Caesar",
    saladPrice: "4.75",
    lighterFare: "Burger & Fries",
    lighterFarePrice: "4.95",
    entree: "Beef & Broccoli with Fried Rice",
    entreePrice: "5.95",
  },
];

// STEP 1 - Define your page variable

// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements

// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above

// STEP 4 - Create a function called next, that will increment your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page variable

// STEP 5 - Create a function called previous, that will decrement your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page varibale

// STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
// which will eventually move the page value outside the bounds of your array.  Fix that.

// STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.

// STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it.

const menus = [];
let page = 0;
const h1 = document.querySelector("h1");
const nextBtn = document.querySelector("#nextMenu");

const soupTitle = document.querySelector("#soupTitle");
const soupPrice = document.querySelector("#soupPrice");

const saladTitle = document.querySelector("#saladTitle");
const saladPrice = document.querySelector("#saladPrice");

const lighterfareTitle = document.querySelector("#lighterfareTitle");
const lighterFarePrice = document.querySelector("#lighterfarePrice");

const EntreeTitle = document.querySelector("#EntreeTitle");
const EntreePrice = document.querySelector("#EntreePrice");

//  https://gist.githubusercontent.com/Emi55/a0571dd37980dca7f935931e7652e10d/raw/7b879f0439b656344b9c3b0a1a52033d2261321f/menu.json

async function getMenus() {
  const res = await fetch(
    "https://gist.githubusercontent.com/Emi55/a0571dd37980dca7f935931e7652e10d/raw/7b879f0439b656344b9c3b0a1a52033d2261321f/menu.json"
  );

  const data = await res.json();
  //    console.log(data);
  menus.push(...data);
  display();
}

function display() {
  console.log(menus);
  h1.textContent = menus[page].title;
  soupTitle.textContent = menus[page].soup.name;
  soupPrice.textContent = menus[page].soup.price;

  saladTitle.textContent = menus[page].salad.name;
  saladPrice.textContent = menus[page].salad.price;

  lighterfareTitle.textContent = menus[page].lighterFare.name;
  lighterFarePrice.textContent = menus[page].lighterFare.price;

  EntreeTitle.textContent = menus[page].entree.name;
  EntreePrice.textContent = menus[page].entree.price;
}

h1.addEventListener("click", next);
getMenus();

function next() {
  if (page === menus.length - 1) {
    page = 0;
  } else {
    page++;
  }

  display();
}

// function menu2() {
//   const h2 = document.querySelector("h2");
//   h2.textContent = menus[page].title;
// }

nextBtn.addEventListener("click", next);

// menu2();
