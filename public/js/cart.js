$(document).ready(function() {
  //In Handlebars there will be plus and minus signs made for quantity that user wants to add to cart
  $(document).on("click", ".add-item", function () {
    var id = $(this).attr('data-name')
    var itemValue = ($(`#${id}`).text())
    itemValue++
    $(`#${id}`).text(itemValue)
    var ele = $(this).parent().parent().find('#addToCart')
    ele.attr('data-item_quantity', itemValue)
    ele.attr('data-item_name', $(this).parent().parent().find('#name2grab').text())  
  })
  
  $(document).on("click", ".subtract-item", function () {
    var id = $(this).attr('data-name')
    var itemValue = ($(`#${id}`).text())
    if (parseInt(itemValue) === 0){
      return
    } else {
      itemValue--
      $(`#${id}`).text(itemValue)
      var ele = $(this).parent().find('#addToCart')
      ele.attr('data-item_quantity', itemValue)
    }

  })
  
  function goToCart(cart) {
    console.log('firing API')
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/checkouts",
      data: JSON.stringify(cart)
    });
  }
  
  $(document).on("click", ".goToCart", function () { 
    var myCart = JSON.parse(localStorage.getItem('shoppingCart'))
    console.log(myCart)
    goToCart(myCart)
  })

  $("#keepshopping").on("click", function (event) {
    event.preventDefault();
    window.location.replace("/");
  })
})