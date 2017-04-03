//Business Logic
//Object Constructor for size and toppings
function Order(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

//Prototype method to calculate the cost of pizza size
Order.prototype.costOfPizzaSize = function(){
  if (this.size === "small") {
    return 5;
  } else if (this.size === "medium") {
    return 10;
  } else if (this.size === "large") {
    return 15;
  } else {
    return 20;
  }
}

//Prototype method to calculate cost of toppings
Order.prototype.costOfToppings = function(){
  for(var index = 0; index <= this.toppings.length; index += 1) {
    console.log(index);
  }
}

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

    console.log(newOrder.costOfPizzaSize());
    console.log(newOrder.costOfToppings());

    // $("#cost").show(newOrder.orderCost());

  });
});

//Prototype method for the cost of a pizza!
