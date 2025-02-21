//Using Promises to avoid callback hell

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

//promise chaining
fetchUser(1)
    .then((user) => fetchOrders(user))
    .then((orders) => fetchOrderDetails(orders[0]))
    .then((orderDetails) => console.log("Order Details:", orderDetails))
    .catch((err) => console.error(err));
