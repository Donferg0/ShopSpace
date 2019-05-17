$(document).ready(function () {
  //create global shopping cart variable to store items
  //must JSON.parse item from local storage because it was stored as a string in order to be functional
  var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || {};
  var handleBuyBtnClick = function () {

    //create any variables needed and grab data from what was clicked
    //handlebars will need to populate any data attributes that you are trying to get information from
    var name = $(this).attr('data-item_name')

    //creating a blank object that will hold information on each item
    var item_info = {}

    item_info.price = $(this).attr('data-item_price')
    item_info.purchase_quantity = $(this).attr('data-item_quantity')

    shoppingCart = {
      //utilize the spread operator in order to keep the current state of the shoppingCart, and then update the new item
      ...shoppingCart,
      // [variable] creates a variable that is what ever the name of the above var name variable is.
      [name]: item_info
    }

    //setting localStorage to hold shopping cart content for persistance
    //must store object in local storage as a string for functionality
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
    $("#shadow-cart").val(JSON.stringify(shoppingCart))
    console.log($("#shadow-cart").val())

    //Call your checkOut function from API and pass in your shopping cart.
    console.log(shoppingCart)
  };

  $(document).on("click", "#addToCart", handleBuyBtnClick)

  // The API object contains methods for each kind of request we'll make
  var API = {
    buyItem: function (buy) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/purchase",
        data: JSON.stringify(buy)
      });
    },
    checkout: function (cart) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/api/checkouts",
        data: JSON.stringify(cart)
      });
    }
  };
});

