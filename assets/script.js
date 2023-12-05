$(document).ready(function () {
  // event.preventDefault();
  $("#myModal").modal("show");
});

// function fetchUrl() {
//   var queryURL = "https://api.sampleapis.com/coffee/hot";
//   fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }
// fetchUrl();

var recipeBtn1 = document.querySelector("#Cappucino-recipe");

function showCappucinoRecipe() {
  document.querySelector("#recipe-instructions").textContent =
    "The cappuccino is an espresso-based drink that actually originated in Austria and was later developed in Italy and made with steamed milk. Usually a cappuccino is made with a single espresso.";
}

recipeBtn1.addEventListener("click", showCappucinoRecipe);

var recipeBtn2 = document.querySelector("#Flatwhite-recipe");

function showFlatWhite() {
  document.querySelector("#recipe-instructions").textContent =
    " Many would argue that the flat white originates from Australia or New Zealand. What makes a flat white is strong coffee (a double espresso) and heated, textured milk that's less foamy than it is in a cappuccino or latte. The top of the coffee is “flat” (hence the name), but still has a nice, smooth texture";
}
recipeBtn2.addEventListener("click", showFlatWhite);

var recipeBtn3 = document.querySelector("#Macchiato-recipe");
function showMacchiato() {
  document.querySelector("#recipe-instructions").textContent =
    "A macchiato is a double espresso with a spot of heated textured milk. I like to drink it in a ceramic cup so that I can smell the aroma and feel the texture of the coffee as well as, of course, taste it. A macchiato means to ‘stain’ your coffee (with milk) so it should really only be a spoon of milk froth on top of the espresso to take the edge off it. It’s often more economical to make a flat white and a macchiato together, so you are not heating and wasting too much milk";
}
recipeBtn3.addEventListener("click", showMacchiato);

var recipeBtn4 = document.querySelector("#Mocha-recipe");
function showMocha() {
  document.querySelector("#recipe-instructions").textContent =
    "A mocha is any kind of drink that combines coffee and chocolate flavours. I really enjoy a mocha when I’m feeling decadent or when I can’t decide between a hot chocolate or cappuccino. Mochaccinos can be made either hot or cold, but it’s important to get the milk nice and frothy. The chocolate and coffee should balance each other out, so it’s not too sweet or too coffee-forward in flavour.";
}
recipeBtn4.addEventListener("click", showMocha);
