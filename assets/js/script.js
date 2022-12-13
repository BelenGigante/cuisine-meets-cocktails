
var mealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
var drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

 
$(document).ready(function () {

  var displayDrink = function (drink){
    $('#drink-recipe-title').text(drink.strDrink);
    $('#drink-recipe-img').attr('src', drink.strDrinkThumb);
    $('#drink-recipe-p').text(drink.strInstructions);
    
  }

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

    // fetch(drinkUrl)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //     displayDrink(data.drinks[0]);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    if (document.getElementById('checkbox1').checked) {
        fetch(drinkUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          displayDrink(data.drinks[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log("alcoholic");
      document.getElementById('checkbox2').checked = false
    }
    if (document.getElementById('checkbox2').checked) {
        i
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
      return;
      document.getElementById('checkbox1').checked = false
      document.getElementById('checkbox3').checked = false
    }
    if (event.target.value === 'option3') {
      console.log("non alcoholic");
      document.getElementById('checkbox1').checked = true
      document.getElementById('checkbox2').checked = false
    }

  });
  
});


