console.log("--- Initializing Inventory System ---");

let inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

let productName = prompt("Enter product name:");
let productPrice = Number(prompt("Enter product price:"));

if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid input! Product was not added.");
} else {
    let category;

    // Assign category using switch
    switch (true) {
        case productPrice < 100:
            category = "Budget";
            break;

        case productPrice <= 200:
            category = "Standard";
            break;

        default:
            category = "Premium";
    }

    inventory.push({
        name: productName.trim(),
        price: productPrice,
        category: category
    });

    console.log(
        `[Prompt executed: User adds "${productName.trim()}" at "$${productPrice}"]`
    );
}

console.log("\n--- Processing Inventory Roster (forEach) ---");

for (let i = 0; i < inventory.length; i++) {
    if (
        !inventory[i].name ||
        !Number.isFinite(inventory[i].price) ||
        inventory[i].price <= 0
    ) {
        continue;
    }

    let category;

    if (inventory[i].price < 100) {
        category = "Budget";
    } else if (inventory[i].price <= 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    inventory[i].category = category;
}

function calculateTotal(items) {
    let total = 0;

    for (let item of items) {
        if (item.price <= 0) {
            continue;
        }

        total += item.price;
    }

    return total;
}

const calculateAdjustedPrice = (price, tax = 0, discount = 0) => {
    let finalPrice = price + price * tax / 100;
    finalPrice -= finalPrice * discount / 100;

    return finalPrice;
};


inventory.forEach((item) => {
    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${item.category}`
    );
});

let totalValue = calculateTotal(inventory);

let affordableItems = inventory.filter((item) => item.price < 200);

let formattedReport = inventory.map(
    (item) => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("\n--- Financial Analytics ---");

console.log(`Total Inventory Value: $${totalValue}`);

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableItems.map((item) => item.name)
);

console.log("Formatted Report List:", formattedReport);

