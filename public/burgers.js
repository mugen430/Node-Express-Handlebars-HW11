$(function() {
  $(".dvrButton").on("click", function(event) {
    var id = $(this).data("id");
    var newdevour = $(this).data("newdevour");
console.log(newdevour)
    var newdevourState = {
      devoured: newdevour
    };

    // Send the PUT request.
    $.ajax("/api/" + id, {
      type: "PUT",
      data: newdevourState
    }).then(
      function() {
        console.log("changed devour to", newdevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

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
        console.log("New burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
