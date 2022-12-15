
var mealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
var drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var clearBtn = $('#clear');



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

        var searched = JSON.parse(localStorage.getItem("searched")) || [];

        fetch(mealUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (mealData) {
                fetch(drinkUrl)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (drinkData) {
                        displayMeal(mealData.meals[0]);
                        displayDrink(drinkData.drinks[0]);
                        var food =mealData.meals[0].strMeal;
                        var drink = drinkData.drinks[0].strDrink;

                        searched.push({ food, drink });
                        localStorage.setItem("searched", JSON.stringify(searched));
                        displaySearched();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });

        if ($('#drinkBox1').prop('checked')) {
            $('#drink-recipe').css("display", "block");
            $('#drinkBox2').prop('click');
        }
        if ($('#drinkBox2').prop('checked')) {
            $('#drink-recipe').html();
            $('#drink-recipe').css("display", "none");
        }
        if ($('#mealBox1').prop('checked')) {
            $('#meal-recipe').css("display", "block");
            $('#mealBox2').prop('click');
        }
        if ($('#mealBox2').prop('checked')) {
            $('#meal-recipe').html();
            $('#meal-recipe').css("display", "none");
        }
    });

    $(".form-check-input").on("click", function (event) {
        if (event.target.value === 'option1') {
            $('#drinkBox2').prop('checked', false);
        }
        if (event.target.value === 'option2') {
            $('#drinkBox1').prop('checked', false);
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

var displaySearched = function () {
    var searchedEl = $('#searched');
    var searched = JSON.parse(localStorage.getItem("searched")) || [];
    searchedEl.empty();
    for (var item of searched) {
        var cardEl = $('<div class="col-8 card p-4 my-3">');
        var cardBodyEl = $('<div class="card-body">');
        var textEl = $('<p>').html('<dl><dt>Meal:</dt><dd>' + item.food + '</dd><dt>Drink:</dt><dd>' + item.drink + '</dd><dl>');
        cardBodyEl.append(textEl);
        cardEl.append(cardBodyEl);
        searchedEl.append(cardEl);
    }
};

clearBtn.on('click', function () {
    localStorage.clear('searched');
    displaySearched();
});

displaySearched();



