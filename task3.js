const orders = [
    {
        id: 1,
        customer: "Jhon",
        items: [
            { name: "Ноутбук", price: 50000, quantity: 1 },
            { name: "Мышь", price: 1500, quantity: 2 },
        ],
    },
    {
        id: 2,
        customer: "Alan",
        items: [
            { name: "Телефон", price: 30000, quantity: 1 },
            { name: "Чехол", price: 1000, quantity: 3 },
        ],
    },
    {
        id: 3,
        customer: "Jane",
        items: [
            { name: "Клавиатура", price: 2500, quantity: 1 },
            { name: "Монитор", price: 12000, quantity: 1 },
        ],
    },
];

let totalIncome = 0;
let mostExpensiveOrder = { customer: "", total: 0 };
let productStats = {};

orders.forEach(order => {
    let orderTotal = 0;
    order.items.forEach(item => {
        const totalItem = item.price * item.quantity;
        orderTotal += totalItem;
        if (productStats[item.name]) {
            productStats[item.name] += item.quantity;
        } else {
            productStats[item.name] = item.quantity;
        }
    });
    console.log(`Заказ №${order.id} (${order.customer}): ${orderTotal} руб.`);
    totalIncome += orderTotal;
    if (orderTotal > mostExpensiveOrder.total) {
        mostExpensiveOrder = { customer: order.customer, total: orderTotal };
    }
});

console.log(`Общий доход магазина: ${totalIncome} руб.`);
console.log(`Самый дорогой заказ сделал: ${mostExpensiveOrder.customer} (${mostExpensiveOrder.total} руб.)`);

console.log("Список всех проданных товаров и их количество:");
for (let product in productStats) {
    console.log(`${product}: ${productStats[product]} шт.`);
}

let popularProduct = Object.entries(productStats).reduce((a, b) => (a[1] > b[1] ? a : b));
console.log(`Самый популярный товар: ${popularProduct[0]} (${popularProduct[1]} шт.)`);
