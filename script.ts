interface Mountain{
    name:string,
    height:number
};

let mountains:Mountain[] =[{
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name:"Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
];

function findNameOfTallestMountain(mountains: Mountain[]): string {
    let temp: number = 0;
    let name: string ="";
    mountains.forEach((mountain)=> {
        if(temp < mountain.height){
            temp = mountain.height;
            name = mountain.name;
        }
    });
    return name;
}
console.log(findNameOfTallestMountain(mountains));


interface Product{
    name: string,
    price: number
};

let products: Product[] = [{
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

function calcAverageProductPrice(products: Product[]): number {
    if(products.length == 0){
        return 0;
    }
    let length: number = products.length;
    let sum: number = 0;
    for(let product of products){
        sum += product.price;
    }
    return sum/length;
}
const avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);

interface InventoryItem{
    product: Product,
    quantity: number
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity:10
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
            name:"LED",
            price: 1.00
        },
        quantity: 20
    }
];

const calcInventoryValue = (inventoryItems: InventoryItem[]):number => {
    if(inventoryItems == null){
        return 0;
    }
    let total: number = 0;
    for(let i = 0; i < inventoryItems.length; i++){
        total += inventoryItems[i].product.price * inventoryItems[i].quantity;
    }
    return total;
}
const total = calcInventoryValue(inventory);
console.log(total);