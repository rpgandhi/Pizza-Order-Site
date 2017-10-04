function Pizza (size) {
  this.pizzaSize = size;
  this.pizzaToppings = [];
};

Pizza.prototype.getOrderNumber=function(min, max) {

  min = Math.ceil(111111);
  max = Math.floor(999999);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  alert("ordernumberworking");
};

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

  $("#pizzaForm").submit(function(event){
    event.preventDefault();

    var orderNum = Pizza.prototype.getOrderNumber();
    var userSize = $("input:radio[name=size]:checked").val();
    var userName = $("input#newName").val();

    var newOrder = new Pizza(userSize);

    $.each($("input[name='toppings']:checked"), function() {
      newOrder.pizzaToppings.push($(this).val());
    });

    $("#orderConfirmation").show();
    $("#pOrder").text(orderNum);
    $("#pSize").text(newOrder.pizzaSize);
    $("#pToppings").text(newOrder.pizzaToppings);
    $("#pTotal").text(newOrder.price());
    $("#pName").text(userName);

  });
});
