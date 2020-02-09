// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var newUser = {
    // name from name input
    userName: $("#fullName")
      .val()
      .trim(),
    // calorie gaol from input
    dailyCalorieGoal: $("#calorieGoal")
      .val()
      .trim(),
    // weight Goal from input
    goalWeight: $("#weightGoal")
      .val()
      .trim(),
    // current weight
    currentWeight: $("#currentWeight")
      .val()
      .trim(),
    // current height
    age: $("#age")
      .val()
      .trim(),
    // motivation 
    inspiration: $("#inspiration")
       .val()
       .trim()
   };



  // send an AJAX POST-request with jQuery
  $.post("/api/new", newUser)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding new user...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#role").val("");
  $("#age").val("");
  $("#force-points").val("");
});
