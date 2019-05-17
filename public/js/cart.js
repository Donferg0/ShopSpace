//In Handlebars there will be plus and minus signs made for quantity that user wants to add to cart
$(document).on("click", ".add-item", function () {
    var id = $(this).attr('data-name')
    var itemValue = ($(`#${id}`).text())
    itemValue++
    $(`#${id}`).text(itemValue)
    var ele = $(this).parent().find('#addToCart')
    ele.attr('data-item_quantity', itemValue)

})

$(document).on("click", ".subtract-item", function () {
    var id = $(this).attr('data-name')
    var itemValue = ($(`#${id}`).text())
    itemValue--
    $(`#${id}`).text(itemValue)
    var ele = $(this).parent().find('#addToCart')
    ele.attr('data-item_quantity', itemValue)
})

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
}
