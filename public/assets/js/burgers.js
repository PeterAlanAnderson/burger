$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {devoured: true}
    }).then(
      function() {
        console.log("changed devoured to true");
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerInput").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
