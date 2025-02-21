function fetchUser(userId, callback) 
{
    setTimeout(() => {
        console.log(`Fetched user with ID: ${userId}`);
        callback({ id: userId, name: "Ram Menon" });
    }, 1000);
}

function fetchOrders(user, callback) 
{
    setTimeout(() => {
        console.log(`Fetched orders for user: ${user.name}`);
        callback(["Order1", "Order2", "Order3"]);
    }, 1000);
}

function fetchOrderDetails(order, callback) 
{
    setTimeout(() => {
        console.log(`Fetched details for order: ${order}`);
        callback({ orderId: order, details: "Order details..." });
    }, 1000);
}


fetchUser(1, (user) => {
    fetchOrders(user, (orders) => {
        fetchOrderDetails(orders[0], (orderDetails) => {
            console.log("Order Details:", orderDetails);
        });
    });
});
