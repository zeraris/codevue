const buttonEl = document.querySelector('button')
const inputEl = document.querySelector('input')
const listEl = document.querySelector('ul')

function addGoal() {
    const enteredValue = inputEl.value
    const listitemEl = document.createElement('li')
    listitemEl.textContent = enteredValue
    listEl.appendChild(listitemEl)
    inputEl.value = ''
} 

buttonEl.addEventListener('click', addGoal)