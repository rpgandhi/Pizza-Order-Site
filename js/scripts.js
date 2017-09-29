// function Pizza (name, size, toppings, orderNumber) {
//   this.personName = name;
//   this.pizzaSize = size;
//   this.pizzaToppings = toppings;
//   this.pizzaOrderNumber = orderNumber;
//   this.pizzaRunningTotal = [];
//   this.pizzaGrandTotal = 0;
// }
//
// Pizza.prototype.getOrderNumber=function(min, max) {
//   min = Math.ceil(111111);
//   max = Math.floor(999999);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// Pizza.prototype.grandTotal = function() {
//   var grandTotal = this.pizzaGrandTotal;
//   if (this.pizzaRunningTotal.length > 0) {
//   var sum = this.pizzaRunningTotal.reduce((a, b)=> a+b);
//   this.pizzaGrandTotal = (sum + grandTotal);
//   }
// }
//
// // Pizza.prototype.showName = function() {
// //   var nameOutput = newUserName.personName;
// //   return nameOutput;
// // }
//
//
// $(document).ready(function(){
//
//   // var userName = $("input#newName").val();
//   // var orderNum = userName.getOrderNumber();
//   // var userName = $("input#newName").val();
//   var orderNum = Pizza.prototype.getOrderNumber();
//   var newOrderNum = new Pizza(orderNum);
//
//
//   $("#pizzaForm").submit(function(event){
//     event.preventDefault();
//
//
//    $('input:checkbox[name=toppings]:checked').each(function(){
//       var userToppings = $(this).val();
//     });
//     var userSize = $("input:radio[name=size]:checked").val();
//     var userName = $("input#newName").val();
//
//
//
//     var newUserName = new Pizza(userName, userSize, userToppings, orderNum);
//
//     alert(orderNum);
//
//     $("#orderConfirmation").show(orderNum);
//     // alert(newUserName.personName);
//     // alert("working");
//     $("#orderNameConfirmation").text(newUserName.personName);
//
//
//
//   });
// });




function Pizza (name, size, topping) {
  this.name = name;
  this.size = size;
  this.topping = topping;
}



$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#newName").val();
    var inputtedSize = $("input#newSize").val();
    var inputtedTopping = $("input#newTopping").val();

    var newOrder = new Pizza(inputtedName, inputtedSize, inputtedTopping);

    $("ul#orderConfirmation").append("<li><span class='contact'>" + newOrder.name + "</span></li>");
    $("ul#orderConfirmation").append("<li><span class='contact'>" + newOrder.size + "</span></li>");
    $("ul#orderConfirmation").append("<li><span class='contact'>" + newOrder.topping + "</span></li>");

    $("input#newName").val("");
    $("input#newSize").val("");
    $("input#newTopping").val("");
  });
});
