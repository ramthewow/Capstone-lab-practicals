function fetchUser(userId) 
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched user with ID: ${userId}`);
            resolve({ id: userId, name: "Ram Menon" });
        }, 1000);
    });
}

function fetchOrders(user) 
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched orders for user: ${user.name}`);
            resolve(["Order1", "Order2", "Order3"]);
        }, 1000);
    });
}

function fetchOrderDetails(order) 
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched details for order: ${order}`);
            resolve({ orderId: order, details: "Order details..." });
        }, 1000);
    });
}

//asynch function
async function main() {
    try {
        // Awaiting the result of each function, sequentially
        const user = await fetchUser(1);          // Fetch user
        const orders = await fetchOrders(user);   // Fetch orders after user is fetched
        const orderDetails = await fetchOrderDetails(orders[0]); // Fetch order details after orders are fetched

        // Log the final result
        console.log("Order Details:", orderDetails);
    } catch (err) {
        // Catch and log any error that happens during the async operations
        console.error("Error:", err);
    }
}


main();
