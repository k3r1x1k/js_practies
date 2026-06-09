const newList = document.querySelector(".js-list");
// console.log(newList);

const newItem = document.createElement("li");
newItem.classList.add("new-item");

const newLinkEl = document.createElement("a");
newLinkEl.textContent = "Hello";

newItem.appendChild(newLinkEl);
//console.log(newItem);

newList.appendChild(newItem)


const colorPickerContainer = document.querySelector('.js-color-picker');
// console.log(colorPickerContainer)
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const buttonList = []

for (const color of colorPickerOptions) {
  const btn = document.createElement("button");
  btn.textContent = color.label;
  btn.style.backgroundColor = color.color; 
  btn.type = "button"
  buttonList.push(btn)
}

console.log(buttonList)

colorPickerContainer.append(...buttonList);

newList.innerHTML = `<li class="js-item"><a href="./dom.html"><span>hi</span>hello</a></li>`

newList.insertAdjacentHTML("afterbegin", `<li class="js-item"><a href="./dom.html"><span>No</span>Nice</a></li>`)


const colorPickerOptions = [
    { label: 'red', color:   '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color:  '#2196F3' },
    { label: 'grey', color:  '#607D8B' },
    { label: 'pink', color:  '#E91E63' },
    { label: 'indigo', color:'#3F51B5' },
  ];

const colorPickerContainer = document.querySelector('.js-color-picker');

const markApp = colorPickerOptions.map(option => {
    return `<button class="btn" type="button" style="background-color: ${option.color};">label${option.label}</button>`
})
.join("")
colorPickerContainer.innerHTML = markApp
console.log(markApp)