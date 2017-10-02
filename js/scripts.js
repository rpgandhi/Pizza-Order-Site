function Pizza (name, size, toppings, orderNumber, runningTotal, grandTotal) {
  this.personName = name;
  this.pizzaSize = size;
  this.pizzaToppings = [];
  this.pizzaOrderNumber = orderNumber;
  this.pizzaRunningTotal = [];
  this.pizzaGrandTotal = grandTotal;
};

Pizza.prototype.getOrderNumber=function(min, max) {
  min = Math.ceil(111111);
  max = Math.floor(999999);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//number of items in the toppings array to calculate Cost
Pizza.prototype.numberToppings = function() {
  var toppingsTotal = 0;
  this.pizzaToppings.forEach(function() {
  toppingsTotal += 2;
  });
  return toppingsTotal;
  alert("toppingsTotalWorking");
};

// Cost calculator prototype
Pizza.prototype.cost = function() {
  var runningTotal = 0;

  if (this.pizzaSize === "small") {
    runningTotal = 8;

  } else if (this.pizzaSize === "medium") {
    runningTotal = 10;

  } else if (this.pizzaSize === "large") {
    runningTotal = 12;

  }
  runningTotal += (this.numberToppings());
  return runningTotal;
  alert("runningWorking");
};

$(document).ready(function(){

  // var userName = $("input#newName").val();
  // var orderNum = userName.getOrderNumber();
  // var userName = $("input#newName").val();
  var orderNum = Pizza.prototype.getOrderNumber();
  // var newOrderNum = new Pizza(orderNum);


  $("#pizzaForm").submit(function(event){
    event.preventDefault();


   $("input:checkbox[name=toppings]:checked").each(function(){
      var userToppings = $(this).val();
      userToppings.push(parseInt($(this).val()));
    });
    var userSize = $("input:radio[name=size]:checked").val();
    var userName = $("input#newName").val();



    var newUserName = new Pizza(userName, userSize, userToppings, orderNum);

    alert(orderNum);

    $("#orderConfirmation").show(orderNum);
    // alert(newUserName.personName);
    // alert("working");
    $("#orderNameConfirmation").text(newUserName.personName);



  });
});
