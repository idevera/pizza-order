//Business Logic
// function Order(size,toppings){
//   this.size = size;
//   this.toppings = toppings;
// }

//Prototype method to calculate the cost of the pizza

//Interface Logic
$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();

    var chosenPizzaSize = $("input:radio[name=pizza-size]:checked").val();
  
    $("input:checkbox[name=topping]:checked").each(function(){
      var chosenToppings = $(this).val();
    });


    //Create new object after user submits the form with selections
    // var userOrder = new Order(chosenPizzaSize, toppings);
  });
});


//Object Constructor for toppings and size
//Prototype method for the cost of a pizza!
