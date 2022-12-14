
var mealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
var drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"




$(document).ready(function () {

    var displayDrink = function (drink) {
        $('#drink-recipe-title').text(drink.strDrink);
        $('#drink-recipe-img').attr('src', drink.strDrinkThumb);
        $('#drink-recipe-p').text(drink.strInstructions);

    }

    var displayMeal = function (meal) {
        $('#meal-recipe-title').text(meal.strMeal);
        $('#meal-recipe-img').attr('src', meal.strMealThumb);
        $('#meal-recipe-p').text(meal.strInstructions);
        $('#meal-recipe-video').attr('href', meal.strYoutube)

    }

    $("#generate-recipe").on("click", function () {

        fetch(mealUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                displayMeal(data.meals[0]);
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
                displayDrink(data.drinks[0]);

            })
            .catch(function (error) {
                console.log(error);
            });

        if ($('#checkbox1').prop('checked')) {
            $('#drink-recipe').css("display", "block");

            console.log("alcoholic");
            $('#checkbox2').prop('click');

        }
        if ($('#checkbox2').prop('checked')) {

            $('#drink-recipe').html();
            $('#drink-recipe').css("display", "none");
            console.log("no drink");

        }
        if ($('#mealBox1').prop('checked')) {
            $('#meal-recipe').css("display", "block");
            $('#mealBox2').prop('click');

        }
        if ($('#mealBox2').prop('checked')) {

            $('#meal-recipe').html();
            $('#meal-recipe').css("display", "none");
        }
        
        var foods = $(".meal").text();
        var drinks = $(".drink").text();


        localStorage.setItem(foods, drinks)
    });

    $(".form-check-input").on("click", function (event) {
        if (event.target.value === 'option1') {

            console.log("alcoholic");
            $('#checkbox2').prop('checked', false);
        }
        if (event.target.value === 'option2') {
            console.log("no drink");

            $('#checkbox1').prop('checked', false);
            return;
        }
    });

    $(".form-check-input").on("click", function (event) {
        if (event.target.value === 'mealOption1') {

            $('#mealBox2').prop('checked', false);

        }
        if (event.target.value === 'mealOption2') {

            $('#mealBox1').prop('checked', false);

            return;
        }
    });

});


