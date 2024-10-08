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
        }
    else if(product.quantity < item.quantity){
        console.log (`${item.name} low in stock`);
        return;  
    }}
    // updating inventory after an order is put in
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
            {name:"Espresso", quantity: 2},
    ], status = "Pending")
    
    placeOrder("Sarah Lee", [
                {name:"Latte", quantity: 1},
                {name:"Matcha", quantity: 1},
            ], status = "Pending")

    placeOrder("Bob Millers", [
        {name:"Latte", quantity: 4},
        {name:"Espresso", quantity: 3},
    ], status = "Pending")
      
    console.log("Orders:", orders);

   
//Task 4: Creating a Function to Calculate Total for an Order

//Creating a function that accepts an order object and calculates the total
function calculateOrderTotal(orders) {
  return orders.reduce((total,orders) => {  //reduce() method to iterate through the order's items
    const product = inventory.find(product => product.name === product.name);
    if(product){
        return total + (product.price * product.quantity); //Taking the price from the inventory and multiplying it by the quantity ordered
    }
    return total;
});
}
const priceOfOrder = calculateOrderTotal(orders);
console.log("Total Price of Order:",priceOfOrder);

//Task 5: Creating a Function to Mark an Order as Completed

//creating a function that accepts a customer name
function completeOrder(customerName) {
   const order =orders.find (order => orders.customerName === customerName); //finding the order with the matching customerName in the orders array 
        if(orders){
            orders.status = "Completed";  //Status is changed to completed
            console.log(`Order for ${customerName} is completed `);
        }else{
                console.log(`Order for ${customerName} could not be found`);
            }
        }
//Testing the function
let completeOrderTest= completeOrder("Sarah Lee")
console.log(`Sarah Lee's order status:${completeOrderTest}`);

//Task 6: Creating a Function to Check Pending Orders

//creating a function that iterates over the orders array and logs details of orders that are still pending
function checkPendingOrders(orders) {
    return orders.filter(order => order.OrderStatus === "Pending");
}
const pendingOrders= checkPendingOrders(orders);
console.log("Order Details of Pending Orders:",pendingOrders); //Testing the Function
