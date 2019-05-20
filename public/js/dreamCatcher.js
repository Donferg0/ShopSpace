// import { totalmem } from "os";

$(document).ready(function(){
  var cartQty = 0
  var totalPrice = 0
  var cartful = JSON.parse(localStorage.getItem('shoppingCart'))

  for(key in cartful){
    cartQty += parseInt(cartful[key].purchase_quantity)
    itemPrices = parseInt(cartful[key].price * cartful[key].purchase_quantity)
    totalPrice += itemPrices
    console.log(itemPrices)

    var element_one = $('<div>')
    var h3 = $('<h3>')
    var price = $('<p>')
    var qty = $('<p>')
    var checkoutPrice = $('<p>')
    var Total = $("<p>")
    // var total = $('<p>')

  

    h3.text(key)
    element_one.append(h3)
    price.text('Price: ' + cartful[key].price)
    element_one.append(price)
    qty.text('Quantity: ' + cartful[key].purchase_quantity)
    element_one.append(qty)
    // console.log(h3)


    // console.log(cartful[keys])
    $("#dream-catcher").append(element_one)
    $(".price").text("$" + totalPrice)
  }
  $('#cart-count').append($('<strong style="margin-left: 5px">').text(cartQty))
})