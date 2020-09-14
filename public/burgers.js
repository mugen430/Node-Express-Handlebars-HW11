$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var devour = $(this).data("devour");
console.log(devour)
    var devourState = {
      devoured: devour
    };
//==============================================================================================
    // Send the PUT request.
    $.ajax("/api/" + id, {
      type: "PUT",
      data: devourState
    }).then(
      function() {
        console.log("changed devour to", devour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
//==============================================================================================
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#ca").val().trim(),
    };
    console.log(newBurger)
    // Send the POST request.
    $.ajax("/api/burger/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("New Burger Added");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
