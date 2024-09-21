//Task 1: Creating an Inventory Array of Product Objects

//Creating an Array of Coffee products in inventory
const inventory = [
    {name:"Matcha",price:4.25,quantity:20},
    {name:"Spanish Latte",price:4.50,quantity:16},
    {name:"Espresso",price:3,quantity:35},
    {name:"Latte", price:4,quantity:65}
];

console.log ("Inventory:",(inventory)); //Logging the array 

//Task 2: Creating an Orders Array of Order Objects

// Empty Array to store customer orders
let orders = [];

//Task 3: Creating a Function to Place an Order

// Function that accepts customer name and an array of ordered items
function placeOrder(customerName,itemsOrdered) {
    //for...of loop to iterate over the array
    for (let item of itemsOrdered) {
        const product = inventory.find (product => product.name === item.name);

        if (!product) {       //if-else statement to execute a block of code if the condition set is met
        console.log (`${item.name} not in inventory`);
        return;
    } 
    else if(product.quantity < item.quantity){
        console.log (`${item.name} low in stock`);
        return;
        
    }};
    //Function to update inventory after an order is put in
    itemsOrdered.forEach(item => {
        const product= inventory.find(product => product.name === item.name);
        if (product) {
            product.quantity -= item.quantity;
        }
      
    });

    //Pushing a new order to the orders array
    orders.push({
        customer:customerName,
        coffeeProducts:itemsOrdered,
        OrderStatus:status
    });

    console.log(`${customerName} order:`, itemsOrdered);
}

//Customer order to test function
    placeOrder("Alicia Ali", [
            {name:"Spanish Latte", quantity: 2},
            {name:"Matcha", quantity: 1},
            {name:"Espresso", quantity: 2}
    ], "Pending");


    placeOrder("Sarah Lee", [
                {name:"Latte", quantity: 1},
                {name:"Matcha", quantity: 1},

    ], "Complete");
            
    console.log("Orders:", orders);

    
