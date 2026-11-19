// Q3. Product Discount System (Constructor Function + Prototype)

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

const product1 = new Product("Laptop", 50000);
const product2 = new Product("Headphones", 3000);
const product3 = new Product("Keyboard", 1500);

console.log(product1.name, "after 10% discount: Rs.", product1.applyDiscount(10));
console.log(product2.name, "after 20% discount: Rs.", product2.applyDiscount(20));
console.log(product3.name, "after 15% discount: Rs.", product3.applyDiscount(15));

// Abstraction: the user calls applyDiscount(percent) without needing to
// write the discount calculation formula each time.
