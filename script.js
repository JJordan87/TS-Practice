;
var mountains = [{
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
];
function findNameOfTallestMountain(mountains) {
    var temp = 0;
    var name = "";
    mountains.forEach(function (mountain) {
        if (temp < mountain.height) {
            temp = mountain.height;
            name = mountain.name;
        }
    });
    return name;
}
console.log(findNameOfTallestMountain(mountains));
;
var products = [{
        name: "Dung",
        price: .99
    },
    {
        name: "Flask",
        price: 4.99
    },
    {
        name: "Papers",
        price: 1.99
    }
];
function calcAverageProductPrice(products) {
    if (products.length == 0) {
        return 0;
    }
    var length = products.length;
    var sum = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        sum += product.price;
    }
    return sum / length;
}
var avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
var calcInventoryValue = function (inventoryItems) {
    if (inventoryItems == null) {
        return 0;
    }
    var total = 0;
    for (var i = 0; i < inventoryItems.length; i++) {
        total += inventoryItems[i].product.price * inventoryItems[i].quantity;
    }
    return total;
};
var total = calcInventoryValue(inventory);
console.log(total);
