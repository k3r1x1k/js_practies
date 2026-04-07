// const hiFn = function () {
//     return "hello"
// }

// const result = hiFn()
// console.log(result)

const showName = function (name) {
    console.log(`"Hello" ${name}`);
}
 showName ("Max")

 // Напишіть функцію mul(n, m), яка приймає два аргументи
//  і повертає добуток, суму і різницю цих аргументів. 
//  Перевірте її роботу.

const mul = function (n, m) {
    const sum = n + m;
    const multiply = n * m;
    const diff = n - m;
    return [sum, multiply, diff]
}

const result1 = mul(2, 4);
console.log(result1)

/* 3
Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. 
Вона приймає два параметри, 

orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
pricePerItem - другий параметр, ціна одиниці товару.
Функція повинна повертати загальну суму покупки - 
результат множення кількості товарів на ціну одного.

Виклик calculateTotalPrice(5, 100) повертає 500 */

const calculateTotalPrice = function (orderedQuantity, pricePerItem){
   const sum = orderedQuantity * pricePerItem
   return sum
}
const result2 = calculateTotalPrice(5, 100)
console.log(result2)
console.log(calculateTotalPrice(5, 100))

/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

const calculateTax = function (amount, taxRate = 0.2){
    const sum = amount * taxRate
    return sum
}

console.log(calculateTax(100, 0.1))

// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20

// створити функцію для створення настроюваного цикла
// з параметрами від до та кроком

const cs = function (){
    for (const element of step) {
        
    }
}

count(1, 5); // From = 1, To = 5, step = 1
count(2); // From = 2, To = 10, step = 1
count(undefined, 5, 2); // From = 0, To = 5, step = 2
count(); // From = 0, To = 10, step = 1


const checkStorage = function (array, item) {
    if (array.includes(item.toLowerCase())) {
        return `${item} is available to order!`
    }
    return "Sorry! We are out of stock!"
}
console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

 checkStorage(["apple", "plum", "pear"], "pLuM")