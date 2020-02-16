var $submitCalTotal = $("#add-calories");

// getUser gets new user from the db
var getUserInfo = function() {
  API.getUser().then(function(data) {
    var userName = data[0].userName;
    var dailyCalorieGoal = data[0].dailyCalorieGoal;
    var goalWeight = data[0].goalWeight;
    var currentWeight = data[0].currentWeight;
    var age = data[0].age;
    var gender = data[0].gender;

    document.getElementById("userName").innerHTML = userName;
    document.getElementById("dailyCalorieGoal").innerHTML = dailyCalorieGoal;
    document.getElementById("goalWeight").innerHTML = goalWeight;
    document.getElementById("currentWeight").innerHTML = currentWeight;
    document.getElementById("age").innerHTML = age;
    document.getElementById("gender").innerHTML = gender;
  });
};

var handleFormSubmit = function(event) {
  API.getExamples().then(function(data) {
    var dailyCalorieGoal = $("#dailyCalorieGoal").text();
    parseFloat(dailyCalorieGoal);
    console.log(dailyCalorieGoal);

    var calorieArrary = data;

    var calorieTotal = 0;

    for (var i = 0; i < calorieArrary.length; i++) {
      calorieTotal = calorieTotal + parseFloat(calorieArrary[i].description);

      console.log("show me total ", calorieTotal);
      
    }
      if (calorieTotal > dailyCalorieGoal) {
        alert(
          "You have surpassed your Daily Calorie Total! Please consider removing an item from the list if you haven't already eaten it."
        );
      }else if (calorieTotal == dailyCalorieGoal) {
        alert("You have reached your Daily Calorie Total for the day");
      }
   
  });
};

$submitCalTotal.on("click", handleFormSubmit);
