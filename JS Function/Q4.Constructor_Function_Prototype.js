function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Add method to prototype
Car.prototype.getDetails = function () {
    return this.brand + " " + this.model;
};

const car1 = new Car("Toyota", "Fortuner");

console.log(car1.getDetails());