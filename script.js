function coffeeApi() {
  var queryUrl = "https://api.sampleapis.com/coffee/hot";
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

coffeeApi();

// function showhotCoffee(data) {
//   let currentEl = document.getElementById("tittle");
//   let hotCoffee = data;
//   let coffeeEl = document.createElement("h3");
//   coffeeEl.innerHTML = hotCoffee;
//   currentEl.append(coffeeEl);
// }
// showhotCoffee();
