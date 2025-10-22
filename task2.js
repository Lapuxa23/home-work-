let input = prompt("Введите сумму покупки в долларах:");
let amount = parseFloat(input);

if (isNaN(amount) || amount <= 0) {
    console.log("Ошибка: введите корректное число больше 0.");
} else {
    let discount = 0;
    if (amount >= 1000 && amount < 5000) {
        discount = 5;
    } else if (amount >= 5000 && amount < 10000) {
        discount = 10;
    } else if (amount >= 10000) {
        discount = 15;
    }
    let finalPrice = amount - (amount * discount / 100);
    finalPrice = finalPrice.toFixed(2);
    console.log(`Сумма покупки: $${amount}`);
    console.log(`Скидка: ${discount}%`);
    console.log(`Итоговая сумма со скидкой: $${finalPrice}`);
}
