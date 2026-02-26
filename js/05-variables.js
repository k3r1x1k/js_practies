// Оголоси змінну message і запиши в неї повідомлення про покупку.
//  "You picked <назва товару>, price per item is <ціна товару> credits"

const productName = "apple";
const productPrise = 2;
const messageOne = "You picked" + " " + productName + "," + "price per item is" + " " + productPrise + " " + "credits"

const messageTwo = `You picked ${productName}, price per item is ${productPrise} credits`;

console.log(messageTwo)

const modMessage = messageTwo.toUpperCase()

// console.log(messageTwo.indexOf("price"))
// console.log(messageTwo.indexOf("Two"))
// console.log(messageTwo.includes("span"))
console.log(messageTwo.includes("item"))

const fileName = "style.css";

console.log(fileName.endsWith(".js"))
console.log(fileName.endsWith(".css"))

const number = 80;
const hours = Math.floor(number / 60);
const minutes = number % 60
console.log(hours, minutes)

const modHours = String(hours).padStart(2, 0);

const modMinutes = String(minutes).padStart(2, 0);

console.log("${modHours}:${modMinutes}");
