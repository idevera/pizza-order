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
    return  10;
  } else if (this.size === "large") {
    return 15;
  } else {
    return 20;
  }
}

//Prototype method to calculate cost of toppings
Order.prototype.costOfToppings = function(){
  for (var index = 0; index <= this.toppings.length; index += 1) {
    return this.toppings.length * 0.50;
  }
}

//Prototype method to calculate total toppings cost
Order.prototype.totalCost = function(){
  return this.costOfPizzaSize() + this.costOfToppings();
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

    //Displays cost to user
    $("#base-cost").html(newOrder.costOfPizzaSize().toFixed(2));
    $("#plus-toppings").html(newOrder.costOfToppings().toFixed(2));
    $("#cost").html(newOrder.totalCost().toFixed(2));

  });
});

//Prototype method for the cost of a pizza!
