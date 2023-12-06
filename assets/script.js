$(document).ready(function () {
  // event.preventDefault();
  $("#myModal").modal("show");
});



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

//MUSIC PLAYER MODAL //

//PLAYLIST 1//
function playlist1() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://spotify23.p.rapidapi.com/playlist_tracks/?id=2Btl13LcHI3ecZyL39rGnJ&offset=0&limit=100",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "469797d608msh05fbf31296aca74p16ffe9jsn5a6f3b196b7f",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    // Access the table body
    const tableBody = $("#data-table-playlist-1 tbody");

    // Loop through the items and populate the table
    response.items.forEach(function (item) {
      // Access data for each track
      const trackTitle = item.track.name;
      const trackArtist = item.track.artists[0].name;
      const trackThumbnail = item.track.album.images[0].url;

      // Create a new row
      const row = $("<tr>");

      // Append cells to the row
      row.append($("<td>").text(trackTitle));
      row.append($("<td>").text(trackArtist));

      // Create an image element and set the src attribute
      const thumbnailCell = $("<td>").append(
        $("<img>")
          .attr("src", trackThumbnail)
          .addClass("trackThumbnail")
          .css("max-width", "50px")
      );
      row.append(thumbnailCell);

      // Append the row to the table body
      tableBody.append(row);
    });
  });
}

playlist1();

//PLAYLIST 2//

function playlist2() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://spotify23.p.rapidapi.com/playlist_tracks/?id=3UEBkaOZDmX7RXxNNxYcBA&offset=0&limit=100",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "469797d608msh05fbf31296aca74p16ffe9jsn5a6f3b196b7f",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    // Access the table body
    const tableBody = $("#data-table-playlist-2 tbody");

    // Loop through the items and populate the table
    response.items.forEach(function (item) {
      // Access data for each track
      const trackTitle = item.track.name;
      const trackArtist = item.track.artists[0].name;
      const trackThumbnail = item.track.album.images[0].url;

      // Create a new row
      const row = $("<tr>");

      // Append cells to the row
      row.append($("<td>").text(trackTitle));
      row.append($("<td>").text(trackArtist));

      // Create an image element and set the src attribute
      const thumbnailCell = $("<td>").append(
        $("<img>")
          .attr("src", trackThumbnail)
          .addClass("trackThumbnail")
          .css("max-width", "50px")
      );
      row.append(thumbnailCell);

      // Append the row to the table body
      tableBody.append(row);
    });
  });
}

playlist2();

// PLAYLIST 3//

function playlist3() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX1uaml3UXYLk&offset=0&limit=100",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "469797d608msh05fbf31296aca74p16ffe9jsn5a6f3b196b7f",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    // Access the table body
    const tableBody = $("#data-table-playlist-3 tbody");

    // Loop through the items and populate the table
    response.items.forEach(function (item) {
      // Access data for each track
      const trackTitle = item.track.name;
      const trackArtist = item.track.artists[0].name;
      const trackThumbnail = item.track.album.images[0].url;

      // Create a new row
      const row = $("<tr>");

      // Append cells to the row
      row.append($("<td>").text(trackTitle));
      row.append($("<td>").text(trackArtist));

      // Create an image element and set the src attribute
      const thumbnailCell = $("<td>").append(
        $("<img>")
          .attr("src", trackThumbnail)
          .addClass("trackThumbnail")
          .css("max-width", "50px")
      );
      row.append(thumbnailCell);

      // Append the row to the table body
      tableBody.append(row);
    });
  });
}

playlist3();

//COFFEE BLENDS SELECTION // 

function displayBlends() {
  fetch("https://fake-coffee-api.vercel.app/api")
  .then((res) => res.json())
  .then((data) => {
      const filteredData = data.filter(function(item){
          return item
      })
      console.log(filteredData);

      //access name
      const blendName = filteredData[0].name;
      console.log(blendName);

      //access description 
      const blendDescription = filteredData[0].description;
      console.log(blendDescription);

      // Access the table body
      const blendstableBody = $('#data-table-blends tbody');

      // Loop through the items and populate the table
      filteredData.forEach ((items) =>{
          // Access data for each blend name
          const blendName = items.name;
          const blendDescription = items.description;
          const flavourProfiles = items.flavor_profile;
          console.log(items.flavor_profile);
          console.log(blendName);

          // Create a new row
          const row = $('<tr>');

          // Append cells to the row
          row.append($('<td>').text(blendName));
          row.append($('<td>').text(blendDescription));
          row.append($('<td>').text(flavourProfiles));

          // Append the row to the table body
          blendstableBody.append(row);
      });


  });
}

displayBlends();


// var question created for questions array with answers, correct answer and fact that will pop up once user presses on any of the answers.
var coffeeQuestions = [
  {
    question: "Does coffee grows in Italy?",
    answers: [
      "1. Of course! That's why they has such a big coffee culture!",
      "2. Only in the summer",
      "3. It used to grow, but global warming caused no more coffee farming in Italy..",
      "4. No, it can only be roasted in Italy.",
    ],
    correctAns: "4. No, it can only be roasted in Italy.",
    fact: "	Climate in Italy is not suitable for coffee cultivation as it lacks the tropical conditions required. Italy imports, roasts, and prepares coffee beans from coffee-producing regions globally, contributing to its rich coffee culture.",
  },
  {
    question: "Does bitter coffee has more caffeine?",
    answers: [
      "1. Yes, that is why it is so bitter, because it has more caffeine.",
      "2. No, bitterness has nothing to do with amount of caffeine.",
      "3. Yes, but only if it's from Brazil.",
      "4. I am not sure...",
    ],
    correctAns: "2. No, bitterness has nothing to do with amount of caffeine.",
    fact: "Bitterness in coffee is primarily due to compounds like chlorogenic acids, and it's not directly correlated with caffeine content. Factors such as roast level, bean type, 	and brewing technique influence bitterness independently of caffeine levels.",
  },
  {
    question: "The name cappuccino comes from: ",
    answers: [
      "1. The drink's resemblance to the brown cowls worn by Capuchin monks.",
      "2. The similarity in color to the fur of Capuchin monkeys.",
      "3. The Italian puccino, meaning 'light brown one'",
      "4. The size of the cup in which it is commonly served.",
    ],
    correctAns:
      "1. The drink's resemblance to the brown cowls worn by Capuchin monks.",
    fact: "The word comes from the resemblance of the drink to the clothing of the Capuchin monks. Their brown tunics appear similar in color to the frothy drink we all know and love.",
  },
  {
    question: "Is decaf coffee completely caffeine-free?",
    answers: [
      "1. I am not sure, I only drink ",
      "2. No, decaf coffee contains a small amount of caffeine, although significantly less than regular coffee.",
      "3. Yes, decaf coffee is entirely caffeine-free.",
      "4. Depends, it depends on the type of decaf process.",
    ],
    correctAns:
      "2. No, decaf coffee contains a small amount of caffeine, although significantly less than regular coffee.",
    fact: "Decaf coffee still contains around 2mg of caffeine because complete removal during the decaffeination process is challenging while preserving the coffee's flavor, and 	regulatory standards allow a small percentage of caffeine to remain.",
  },
  {
    question: "Is it New Zealand or Australia who created flat white",
    answers: [
      "1. New Zealand is the birthplace of flat white.",
      "2. Australia is credited with inventing flat white.",
      "3. Both New Zealand and Australia claim to have created the flat white.",
      "4. Honestly, who knows! Every country is still fighting over it, but it gained popularity in both New Zealand and Australia.",
    ],
    correctAns:
      "3. Both New Zealand and Australia claim to have created the flat white.",
    fact: "The claim that both New Zealand and Australia created the flat white arises from the intertwined coffee cultures and shared history between the two countries. New Zealand 	and Australia each assert their role in the flat white's invention, reflecting a collaborative influence on the development of this popular espresso-based drink.",
  },
  {
    question: "Is it espresso or expresso?",
    answers: [
      "1. It is different in each country",
      "2. Expresso - it gives rapid boost of energy",
      "3. Espresso and Expresso are both correct.",
      "4. Espresso - the name came from Italy",
    ],
    correctAns: "4. Espresso - the name came from Italy",
    fact: "Its name is derived from the Italian word 'esprimere', which means 'to express' or 'to force out'. This term reflects the process of making espresso, where hot water is 	forced through finely-ground coffee under high pressure, resulting in a concentrated and flavorful shot of coffee. The name emphasizes the idea of extracting the essence of coffee 	through this intense and quick brewing method.",
  },
];

console.log(coffeeQuestions);

// elements created for classes
var questionEl = $("#questions");
var questionTitle = $("#question-title");
var startBtn = $("#start");
var submitBtn = $("#submit");
var initials = $("#initials");
var feedback = $("#feedback");
var endScreen = $("#end-screen");
var startScreen = $("#start-screen");

// quiz state var
var currentQuesIndex = 0;
var quizStart = false;
var winCount = 0;
var totalScore;

// create a start quiz function
function startQuiz() {
  if (!quizStart) {
    console.log("startQuiz");
    quizStart = true;
    currentQuesIndex = 0;
    // displayQuestions();
    console.log("hiding things");
    startBtn.addClass("hide");
    startScreen.addClass("hide");
    questionEl.removeClass("hide");
  }
}
// startQuiz();
// add click function for start button
startBtn.on("click", function () {
  startQuiz();
  displayQuestions();
});
// create a display questions function
function displayQuestions() {
  console.log("displayQuestions");
  var currentQuestion = coffeeQuestions[currentQuesIndex];
  questionTitle.text(currentQuestion.question);

  var answerBtns = $("#choices");
  answerBtns.empty();

  console.log(currentQuestion);
  currentQuestion.answers.forEach(function (answer) {
    console.log(answer);
    // var answerBtn = $("<button>").addClass("answer").text(answer);
    // answerBtns.append(answerBtn);
    createAnsBtn(answer, currentQuestion.correctAns);
  });
}

// create answer button function
function createAnsBtn(answer, correctAns) {
    var answerBtn = $("<button>").addClass("answer").text(answer);
    console.log("answerBtn");
    answerBtn.on("click", function () {
        console.log("Answer button clicked");
        var selectedAns = $(this).text();
        console.log("Selected Answer: ", selectedAns);
        checkAns(selectedAns, correctAns);
    });
    console.log("click");
    $("#choices").append(answerBtn);
}
// create a function that checks if the user selected correct answer and display a fact within the modal
function checkAns(selectedAns, correctAns, fact) {
    console.log("Selected Answer:", selectedAns);
    console.log("Correct Answer:", correctAns);
  if (selectedAns === correctAns) {
    winCount++;
    feedback.removeClass("hide").text("Genius! You are correct! " + fact);
  } else {
    feedback.removeClass("hide").text("Sorry.. Wrong " + fact);
  }
  totalScore = winCount;
  displayNextQuestion();
}
// create a function to reset answer buttons (for each question)
function resetAnsBtns() {
    $("#choices").empty();
}
// create a function to display next question
function displayNextQuestion() {
  currentQuesIndex++;
  if (currentQuesIndex < coffeeQuestions.length) {
    resetAnsBtns();
    displayQuestions();
  } else {
    console.log("End of quiz. Total Score: " + totalScore);

    endScreen.removeClass("hide");
    $("#final-score").text(totalScore);
  }
}
// create a function to store user initials within a local storage and keep them displayed even when page reloads, so that useer can access it

// create a function to show the final score

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
