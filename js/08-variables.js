let count = 0;

while (count < 10) {
    //    console.log(`Count: ${count}`);
    count += 1;
}

let count1 = 5;

do {
    //    console.log(`Count: ${count1}`);
    count1 += 1;
} while (count1 < 5);


for (let i = 0; i <= 10; i += 1) {
    // console.log(i); 
}


// Нюанси інкрементів та декрементів

// Префіксний інкремент (++value) 
// спочатку збільшує значення змінної, 
// а потім використовує нове значення у виразі.

let x = 5;
const y = ++x;
// console.log(x); // 6
// console.log(y); // 6


// Постфіксний інкремент (value++) 
// спочатку використовує поточне значення змінної у виразі, 
// а потім виконує збільшення значення.

let f = 5;
const g = f++;
// console.log(f); // 6
// console.log(g); // 5


// Знайти суму всіх цілих чисел від одиниці до цього числа
const number = 10;

let result = 0;

for (let i = 0; i <= number; i = i + 1) {
    result = result + i;
    // console.log(i); 

}

// console.log(result);

// 2
// Переписати на while


// for (let number = 0; number < 5; number += 1) {
//     console.log(`Число ${number}`);
// }
let num = 0;

while (num < 5) {
    num += 1;
    // console.log(`Число ${num}`);
}

// Задачка вивести парні числа

for( let i = 0; i <= 10; i = i + 2){
console.log(i)
}

const value = 10;
for (let i = 0; i < value; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
}