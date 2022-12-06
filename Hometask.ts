enum pizza{
    pizzaCount = 0 // initially all pizza count should be 0 
}
interface User{
    userName:string,
    userId:number,
    pizzaCount :number,
}
class Cart implements User{
    pizzaCount:number;
    userId:number = Math.floor(Math.random()*9999);
    userName:string;
    constructor(name:string){
        this.userName = name;
        this.pizzaCount = pizza.pizzaCount;
    }
    addPizza():void{
        this.pizzaCount++;
    }
    removePizza():void{
        if(this.pizzaCount==0){
            console.log('cart already empty');
        }
        this.pizzaCount--;
    }
}

const mycart = new Cart('Ravinder');
console.log(mycart.userName);
console.log(mycart.userId);
console.log(mycart.pizzaCount);
mycart.addPizza();
console.log(mycart.pizzaCount)
mycart.addPizza();
mycart.addPizza();
mycart.addPizza();
console.log(mycart.pizzaCount)
mycart.removePizza();
mycart.removePizza();
mycart.removePizza();
mycart.removePizza();
console.log(mycart.pizzaCount);
mycart.removePizza();
