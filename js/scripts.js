// function Pizza (name, size, toppings, orderNumber, runningTotal, grandTotal)

function Pizza (size) {
  // this.personName = name;
  this.pizzaSize = size;
  this.pizzaToppings = [];
  // this.pizzaOrderNumber = orderNumber;
  // this.pizzaRunningTotal = [];
  // this.pizzaGrandTotal = grandTotal;
};

Pizza.prototype.getOrderNumber=function(min, max) {

  min = Math.ceil(111111);
  max = Math.floor(999999);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  alert("ordernumberworking");
};

//number of items in the toppings array to calculate Cost
// Pizza.prototype.numberToppings = function() {
//   var toppingsTotal = 0;
//   this.pizzaToppings.forEach(function() {
//   toppingsTotal += 2;
//   });
//   return toppingsTotal;
//   alert("toppingsTotalWorking");
// };
//
// // Cost calculator prototype
// Pizza.prototype.cost = function() {
//   var runningTotal = 0;
//
//
//   if (this.pizzaSize === "small") {
//     runningTotal = 8;
//
//   } else if (this.pizzaSize === "medium") {
//     runningTotal = 10;
//
//   } else if (this.pizzaSize === "large") {
//     runningTotal = 12;
//
//   }
//   var grandTotal = runningTotal + toppingsTotal;
//
//   return grandTotal;
//   alert("runningWorking");
// };

Pizza.prototype.price = function() {
  var price = 0;

  if (this.pizzaSize === "Small") {
    price = 8;
  } else if (this.pizzaSize === "Medium") {
    price = 10;
  } else if (this.pizzaSize === "Large") {
    price = 12;
  }

  if (this.pizzaToppings.length === 0) {
    price += 0;
  } else {
    price += this.pizzaToppings.length;
  }

  return price;
};


$(document).ready(function(){

  // var userName = $("input#newName").val();
  // var orderNum = userName.getOrderNumber();
  // var userName = $("input#newName").val();
  var orderNum = Pizza.prototype.getOrderNumber();
  // var newOrderNum = new Pizza(orderNum);


  $("#pizzaForm").submit(function(event){
    event.preventDefault();

    // var orderNum = Pizza.prototype.getOrderNumber();
    var userSize = $("input:radio[name=size]:checked").val();
    var userName = $("input#newName").val();

    var newOrder = new Pizza(userSize);

  //  $("input[name="toppings"]:checked").each(function(){
   //
  //     newOrder.pizzaToppings.push($(this).val());
  //     alert(pizzaToppings);
  //   });

  $.each($("input[name='toppings']:checked"), function() {
    newOrder.pizzaToppings.push($(this).val());
  });
    // var userSize = $("input:radio[name=size]:checked").val();
    // var userName = $("input#newName").val();



    // var newUserName = new Pizza(userName, userSize, userToppings, orderNum);

    // alert(orderNum);

    $("#orderConfirmation").show();
    // alert(newUserName.personName);
    // alert("working");
    $("#pOrder").text(orderNum);
    $("#pSize").text(newOrder.pizzaSize);
    $("#pToppings").text(newOrder.pizzaToppings);
    $("#pTotal").text(newOrder.price());
    $("#pName").text(userName);


  });
});
