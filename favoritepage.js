const removeEverything = document.querySelector('#remove-everything')

removeEverything.addEventListener('click', () => {
  localStorage.removeItem('name')
  localStorage.removeItem('first-favorite')
  localStorage.removeItem('second-favorite')
  localStorage.removeItem('third-favorite')
})