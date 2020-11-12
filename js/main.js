const flyPrice = 15.678;
const iphonePrice = 123.965;
const nokiaPrice = 90.2345;

const maxPrice = Math.max(flyPrice, iphonePrice, nokiaPrice);
console.log(`Максимальна ціна ${maxPrice}`);

const minPrice = Math.min(flyPrice, iphonePrice, nokiaPrice);
console.log(`Мінімальна ціна ${minPrice}`);

const totalPrice = flyPrice + iphonePrice + nokiaPrice;
console.log(`Вартість всіх товарів ${totalPrice}`);

const totalPriceRound = Math.floor(flyPrice) + Math.floor(iphonePrice) + Math.floor(nokiaPrice);
const sumPriceRound = (Math.ceil(totalPriceRound / 100) * 100);
console.log(`Сума товарів округлена до сотень ${sumPriceRound}`);

const isEvenOrOdd = totalPriceRound % 2 === 0;
console.log(`Чи є сума всіх товарів парним числом ${isEvenOrOdd}`);

const cashPay = 500;
const cashRemainder = cashPay - totalPrice;
console.log(`Сума решти, при оплаті всіх товарів ${cashRemainder}`);

const average = Number(totalPrice / 3).toFixed(2);
console.log(`Середнє значення цін ${average}`);

const min = 10;
const max = 50;
const percentDiscount = Math.round(Math.random() * (max - min + 1)) + min;
console.log(`Випадкова знижка ${percentDiscount}%`);
const priceWithDiscount = Number(totalPrice - (totalPrice * percentDiscount / 100)).toFixed(2);
console.log(`Сума до сплати зі знижкою ${priceWithDiscount}`);

const profit = Number(totalPrice / 2 - priceWithDiscount).toFixed(2);
console.log(`Чистий прибуток ${profit}`);

console.log(`Максимальна ціна ${maxPrice}, 
Мінімальна ціна ${minPrice}, 
Вартість всіх товарів ${totalPrice}, 
Сума товарів округлена до сотень ${sumPriceRound}, 
Чи є сума всіх товарів парним числом ${isEvenOrOdd}, 
Сума решти, при оплаті всіх товарів ${cashRemainder}, 
Середнє значення цін ${average}, 
Випадкова знижка ${percentDiscount}%, 
Сума до сплати зі знижкою ${priceWithDiscount}, 
Чистий прибуток ${profit}`);
