const books = document.querySelectorAll('.book')
const elems = document.getElementsByTagName('li')
const links = document.getElementsByTagName('a')
const adv = document.querySelector('.adv')
const newElem = document.createElement('li')


books[1].after(books[0])
books[5].after(books[2])
books[3].before(books[4])
document.body.style.backgroundImage = "URL('image/you-dont-know-js.jpg')"
links[2].textContent='Книга 3. this и Протопипы Объектов'
adv.remove()
elems[9].after(elems[12])
elems[10].after(elems[14])
elems[15].after(elems[8])
elems[37].after(elems[45])
elems[38].after(elems[40])
elems[41].after(elems[40])
elems[44].after(elems[42])
newElem.textContent = 'Глава 8: За пределами ES6'
books[2].append(newElem)
elems[55].after(elems[57])