const myFriends = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < myFriends.length; i += 1){
    // console.log(myFriends[i])
}

for( const friend of myFriends){
    console.log(friend)
}

// Написати скрипт який порахує сумму всіх парних чисел в масиві
const numberArr = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let totalNum = 0;

 for( const num of numberArr){
    if (num % 2 === 0) {
        console.log("парне число", num)
        totalNum += num;
    }
 }
//  console.log(totalNum)


const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
// let message = `Користувач ${loginToFind} не знайдено.`;

const array = ["Mango", "hurries", "to", "the", "train"];
// console.log(array.join(" "));
// console.log(array.indexOf("to"));
// console.log(array.includes("banana"));

// 2
// є рядок, що склад зі слів, розділених лише пробілами <message> 
// та  число, що містить ціну <pricePerWord >
// напиши код, що рахує загальну вартість гравірування слів в рядку

// "JavaScript is in my blood", 10 повертає 50
// "Web-development is creative work", 20 повертає 80


const text = "JavaScript is in my blood";
const pricePerWord = 10;


const messageArray = text.split(" ");
console.log(messageArray);

const price = messageArray.length *  pricePerWord
console.log(price);

// 3
// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код , щоб перевіряти, чи присутній такий товар в масиві storage
// і повертати:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру

// ["apple", "plum", "pear"], "plum" повертає "plum is available to order!"
// ["apple", "plum", "pear"], "pEAr" повертає "pear is available to order!"
// ["apple", "plum", "pear"], "orange" повертає "Sorry! We are out of stock!"

// const storage = ["apple", "plum", "pear"];
// const item = "plUm";

// const convertedItem = item.toLowerCase();
// const isIncluded = storage.includes(convertedItem);
// // let answer;
// if(isIncluded){
//     console.log(`${item} is available to order!`)
// } else{
//     console.log("Sorry! We are out of stock!")
// }

// storage.push("banana")
// storage.unshift("chery")
// storage.pop()
// storage.shift()
// console.log(storage)


const vegetebles = ['carrot', 'tomato', 'potato', 'cucumber', 'onion', 'beans']
 const fitstTwoElements = vegetebles.slice(0,2)
 const lastToElements = vegetebles.slice(-3)
  const nonExtremsElements = vegetebles.slice(1,vegetebles.length-1)
  console.log(nonExtremsElements);
 console.log(fitstTwoElements);
 console.log(lastToElements);