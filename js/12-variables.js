const myScore = function (score) {
  if (score < 100 && score > 91) {
    return "A";
  }
  if (score < 90 && score > 81) {
    return "B";
  }
  if (score < 80 && score > 71) {
    return "C";
  }
  if (score < 70 && score > 0) {
    return "D";
  }
  return "Введіть коректне значення.";
};

myScore(93);
console.log(myScore(93));

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

const calculateTotalPrice1 = function(items){
  let total = 0;
  for (const item of items) {
     total += item;
  }
  return total
}

console.log(calculateTotalPrice1(cart));
console.log(calculateTotalPrice1([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice1([100, 200, 300])); // 600


//  Напиши функцію filterNumbers(array [, number1, ...]) яка:
//  - першим аргументом приймає масив чисел
//  - після 1-го аргумента можуть бути інші аргументи, які будуть числами.
//  - Функція повинна повернути новий масив, 
// в якому будут тільки ті аргументи, починаючи з другого,
// для яких є аналог в оригінальном масиві.
// */

function filterNumbers(array, ...args) {
  const newArray = [];
  for (const item of array){
    if (args.includes(item)){
      newArray.push(item);
    }
  }
  return newArray
}

  console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
  console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
  console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12));
