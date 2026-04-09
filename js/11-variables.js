// створити функцію для створення настроюваного цикла
// // з параметрами від до та кроком
// count(1, 5); // From = 1, To = 5, step = 1
// count(2); // From = 2, To = 10, step = 1
// count(undefined, 5, 2); // From = 0, To = 5, step = 2
// count(); // From = 0, To = 10, step = 1


function count (from =, to, step) {
for (let i = from; i <=to; i += step) {
    console.log(i);   
}
}

count()
// count(1, 5, 1)
// count(2, 10, 1)
// count(0, 5, 2)
// count(0, 10, 1)

const myScore = function (score) {
  if ( score < 100 && score> 91) {
console.log("A");
    } else   if ( score < 90 && score > 81) {
console.log("B");
    } else   if ( score < 80 && score > 71) {
console.log("C");
    } else   if ( score < 70 && score > 0) {
console.log("D");
    } else {
        console.log("Введіть коректне значення.");
        
    }
}
myScore(95)