// JavaScript Classes
class Pizza {

    constructor(pizzaSize) {

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

}

class SpecialtyPizza extends Pizza {

    constructor(pizzaType) {

        // Calling constructor of parent class with super keyword.
        // We should call super before we use "this" keyword.
        super(pizzaType);

        this.type = "The Works";

    }

    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }

}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();