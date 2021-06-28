const removeEverything = document.querySelector('#remove-everything')
const firstFavorite = document.querySelector("#first-favorite")


console.log(localStorage.getItem('first-favorite'))

console.log(JSON.parse(localStorage.getItem('first-favorite')))

let favoriteList = JSON.parse(localStorage.getItem('first-favorite'))

let newUl = document.createElement('ul')
  newUl.id = "favorite-ul"
  firstFavorite.append(newUl)
  let count = 0
favoriteList.forEach(element => {
  count += 1
  let newLi = document.createElement('li')
  newUl.append(newLi)
  newLi.id = "favorite-id"
  newLi.style.display = "block"
  newLi.append(element);
})

removeEverything.addEventListener('click', () => {
  localStorage.removeItem('name')
  localStorage.removeItem('first-favorite')
})