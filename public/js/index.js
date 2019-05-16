$(document).ready(function() {
  $(document).on("click", ".buy", handleBuyBtnClick);

  // The API object contains methods for each kind of request we'll make
  var API = {
    buyItem: function(buy) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/purchase",
        data: JSON.stringify(buy)
      });
    }
    // searchCategory: function() {
    //   return $.ajax({
    //     url: "api/items",
    //     type: "GET"
    //   });
    // },
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  var handleBuyBtnClick = function() {
    var idToBuy = $(this)
      .parent()
      .attr("data-id");

    API.buyItem(idToBuy).then(function(){;
    });
});

