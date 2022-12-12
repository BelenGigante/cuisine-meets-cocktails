// http://www.themealdb.com/api/json/v1/1/random.php
// http://www.thecocktaildb.com/api/json/v1/1/random.php
var mealURL = "http://www.themealdb.com/api/json/v1/1/random.php"


fetch(mealURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });