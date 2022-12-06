var pizza;
(function (pizza) {
    pizza[pizza["pizzaCount"] = 0] = "pizzaCount";
})(pizza || (pizza = {}));
var Cart = /** @class */ (function () {
    function Cart(name) {
        this.userId = Math.floor(Math.random() * 9999);
        this.userName = '';
        this.userName = name;
        this.pizzaCount = pizza.pizzaCount;
    }
    Cart.prototype.addPizza = function () {
        this.pizzaCount++;
    };
    Cart.prototype.removePizza = function () {
        if (this.pizzaCount == 0) {
            console.log('cart already empty');
        }
        this.pizzaCount--;
    };
    return Cart;
}());
var mycart = new Cart('Ravinder');
console.log(mycart.userName);
console.log(mycart.userId);
console.log(mycart.pizzaCount);
mycart.addPizza();
console.log(mycart.pizzaCount);
mycart.addPizza();
mycart.addPizza();
mycart.addPizza();
console.log(mycart.pizzaCount);
