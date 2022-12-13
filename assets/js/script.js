// http://www.themealdb.com/api/json/v1/1/random.php
// http://www.thecocktaildb.com/api/json/v1/1/random.php
var mealUrl = "http://www.themealdb.com/api/json/v1/1/random.php"
var drinkUrl = "http://www.thecocktaildb.com/api/json/v1/1/random.php"


$(document).ready(function () {

  $(".btn").on("click", function () {

    fetch(mealUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });

    fetch(drinkUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (document.getElementById('checkbox1').checked) {
      console.log("alcoholic");
      document.getElementById('checkbox2').checked = false
    }
    if (document.getElementById('checkbox2').checked) {
      console.log("no drink");
    }
    if (document.getElementById('checkbox3').checked) {
      console.log("non alcoholic");
    }
  });

  $(".form-check-input").on("click", function (event) {
    if (event.target.value === 'option1') {
      console.log("alcoholic");
      document.getElementById('checkbox2').checked = false
      document.getElementById('checkbox3').checked = false
    }
    if (event.target.value === 'option2') {
      console.log("no drink");
      document.getElementById('checkbox1').checked = false
      document.getElementById('checkbox3').checked = false
    }
    if (event.target.value === 'option3') {
      console.log("non alcoholic");
      document.getElementById('checkbox1').checked = false
      document.getElementById('checkbox2').checked = false
    }

  });
  
});


