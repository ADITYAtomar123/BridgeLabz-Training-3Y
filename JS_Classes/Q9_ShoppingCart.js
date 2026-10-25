// Q9: Shopping Cart with coupon validation using RegExp.
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(coupon) {
        const pattern = /^(SAVE|DISC)(10|20)$/;

        if (!pattern.test(coupon)) {
            console.log("Invalid coupon code.");
            return;
        }

        const discountPercent = Number(coupon.match(/\d+$/)[0]);
        const total = this.getTotal();
        const discount = total * discountPercent / 100;
        const finalTotal = total - discount;

        console.log(`Cart Total: ₹${total}`);
        console.log(`Discount: ${discountPercent}%`);
        console.log(`Discount Amount: ₹${discount}`);
        console.log(`Final Total: ₹${finalTotal}`);
    }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

console.log(`Total: ₹${cart.getTotal()}`);
cart.applyCoupon("SAVE20");
