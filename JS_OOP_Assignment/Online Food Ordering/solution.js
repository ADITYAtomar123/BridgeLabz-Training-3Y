// Q2. Online Food Ordering (map + Error Handling)

const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    // Find each ordered item's price. An unknown item is an invalid order.
    const priceList = orderItems.map(itemName => {
        const menuItem = menu.find(item => item.name.toLowerCase() === itemName.toLowerCase());

        if (!menuItem) {
            throw new Error(`"${itemName}" is not available on the menu.`);
        }

        return menuItem.price;
    });

    return priceList.reduce((total, price) => total + price, 0);
}

try {
    const order = ["Pizza", "Burger", "Pasta"];
    console.log("Total bill: Rs.", calculateBill(order));
} catch (error) {
    console.log("Unable to place order:", error.message);
}

try {
    const invalidOrder = ["Pizza", "Sushi"];
    console.log("Total bill: Rs.", calculateBill(invalidOrder));
} catch (error) {
    console.log("Unable to place order:", error.message);
}
