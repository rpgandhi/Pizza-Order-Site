function Pizza (name, size, toppings, cost, orderNumber) {
  this.personName = name;
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaRunningTotal = [];
  this.pizzaGrandTotal = 0;
  this.pizzaOrderNumber = orderNumber;
}

Pizza.prototype.getOrderNumber=function(min, max) {
  min = Math.ceil(111111);
  max = Math.floor(999999);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Pizza.prototype.grandTotal = function() {
  var grandTotal = this.pizzaGrandTotal;
  if (this.pizzaRunningTotal.length > 0) {
  var sum = this.pizzaRunningTotal.reduce((a, b)=> a+b);
  this.pizzaGrandTotal = (sum + grandTotal);
  }
}










$(document).ready(function(){

  // var userName = $("input#newName").val();
  // var orderNum = userName.getOrderNumber();
  // var userName = $("input#newName").val();
  var orderNum = Pizza.prototype.getOrderNumber();

  $("#pizzaForm").submit(function(event){
    event.preventDefault();

    var userName = $("input#newName").val();
    var newUserName = new Pizza(userName);


    alert(orderNum);

    $("#orderConfirmation").text(userName);
    $("#orderConfirmation").text(orderNum);
    // alert(userName);
    alert("working");
    // $("#orderConfirmation").show(newPizza.personName);


  });
});
