const button = document.getElementById('btn')
const changeColor = document.getElementById('text')
const square = document.getElementById('square')
const btnClick = document.getElementById('e_btn')
const changeRange = document.getElementById('range')
const rangeSpan = document.getElementById('range-span')
const circle = document.getElementById('circle')

button.addEventListener('click', () => {
if (changeColor.value === '') {
    alert('Выбери цвет')
    } else {
        square.style.backgroundColor = changeColor.value
}
})

btnClick.style.display = 'none'

changeRange.addEventListener('input', () => {
    rangeSpan.textContent = changeRange.value
    circle.style.width = changeRange.value + "%"
    circle.style.height = changeRange.value + "%"
})