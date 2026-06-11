const button = document.querySelector(".js-button")
const onButtonClick = (event) => {
const button = event.target
// console.log(button)
button.style.backgroundColor = "green"
}

// button.addEventListener("click", onButtonClick)

const addStyleBtn = document.querySelector("title")
const title = document.querySelector(".js-title")
const onAddStyleBtnClick = () => {
    title.classList.add("title")
}

addStyleBtn.addEventListener("click", onAddStyleBtnClick)