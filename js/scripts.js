//Business Logic
function Order(size, toppings){
  this.size = size;
  this.toppings = toppings;
}
//Variables

// var smallPizza = 5;
// var mediumPizza = 10
// var largePizza = 15
// var xLargePizza = 20

//Prototype method to calculate the cost of the pizza
// Order.prototype.orderCost = function(){
//   if (inputPizzaSize === "small") {
//   }
// }



//Interface Logic
$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();

    var inputPizzaSize = $("input:radio[name=pizza-size]:checked").val();

    var toppingsList = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var inputToppings = $(this).val();
      toppingsList.push(inputToppings);
    });

    //Create new object after user submits the form with selections
    var newOrder = new Order(inputPizzaSize, toppingsList);

    alert(newOrder);
    // $("#cost").show(newOrder.orderCost());

  });
});


//Object Constructor for toppings and size
//Prototype method for the cost of a pizza!
