const listEl = document.querySelector('.site-nav')
// console.log(listEl);

const ulListChldren = listEl.children
// console.log(ulListChldren);


for (const child of ulListChldren) {
    const link = child.firstElementChild
    // console.log(link);
    // console.log(child);
    link.classList.add("nav-link")
}


const linksEl = document.querySelectorAll('.site-nav__item > a')
// console.log(linksEl);


for (const link of linksEl) {
    // console.log(link);
    link.classList.add("new-link")
}

const inputEl = document.querySelector('input')
console.log(inputEl)
const inputValue = inputEl.value
console.log(inputValue)
const buttonEl = document.querySelector('button[type = "button"]')
console.log(buttonEl)
buttonEl.textContent = inputValue
