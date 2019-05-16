$(document).ready(function() {

  var shoppingCart = {};
    $(document).on("click", ".checkout", 

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
    },
    checkout: function(cart) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/checkout",
        data: JSON.stringify(cart)
      });
    }
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  var handleBuyBtnClick = function() {
    var idToBuy = $(this)
      .parent()
      .attr("data-id");

    API.buyItem(idToBuy).then(function() {});
  };
});


