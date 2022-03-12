// JavaScript Classes
class Pizza {

    constructor(pizzaType, pizzaSize) {

        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];

    }

    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    getToppings() {
        return this.toppings;
    }

    setToppings(topping) {
        this.toppings.push(topping); // Add new item to toppings array.
    }

    bake() {
        console.log(
            `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
        );
    }

}

const myPizza = new Pizza("pepperoni", "small");

myPizza.setCrust("thin");

myPizza.setToppings("sausage");
myPizza.setToppings("olives");

myPizza.bake();

console.log(myPizza.getToppings());