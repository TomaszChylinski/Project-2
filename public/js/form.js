//Get references to page elements

// btn reference
var $submitBtn = $("#submit"); 

// form values
var $userName = $("#fullName");
var $dailyCalorieGoal = $("#calorieGoal");
var $goalWeight = $("#calorieGoal");
var $currentWeight = $("#currentWeight");
var $age = $("#age");
var $gender = $("input[name=genderChoice]:checked");
var $inspired = $("#inspired");


// The API object contains methods for each kind of request we'll make
var API = {
    saveUser: function (user) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/users",
            data: JSON.stringify(user)
        });
    },
    getUser: function () {
        return $.ajax({
            url: "api/users",
            type: "GET"
        });
    },
    deleteUser: function (id) {
        return $.ajax({
            url: "api/users/" + id,
            type: "DELETE"
        });
    }
};


var handleFormSubmit = function (event) {
    event.preventDefault();

    var user = {
        userName: $userName.val().trim(),
        dailyCalorieGoal: $dailyCalorieGoal.val().trim(),
        goalWeight: $goalWeight.val().trim(),
        currentWeight: $currentWeight.val().trim(),
        age: $age.val().trim(),
        gender: $gender.val().trim(),
        inspired: $inspired.val().trim()
    };

    if (!(user.userName && user.dailyCalorieGoal && user.goalWeight && user.currentWeight && user.age && user.gender && user.inspired)) {
        alert("Please make sure to fill out each category, thank you");
        return;
    }

    API.saveUser(user).then(function () {
 
    });

    $userName.val().trim();
    $dailyCalorieGoal.val().trim();
    $goalWeight.val().trim();
    $currentWeight.val().trim();
    $age.val().trim();
    $gender.val().trim();
    $inspired.val().trim();
  };

  // Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
