// http://www.themealdb.com/api/json/v1/1/random.php
// http://www.thecocktaildb.com/api/json/v1/1/random.php
var mealUrl = "http://www.themealdb.com/api/json/v1/1/random.php"
var drinkUrl = "http://www.thecocktaildb.com/api/json/v1/1/random.php"

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