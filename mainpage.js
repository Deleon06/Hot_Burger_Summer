const nameForm = document.querySelector("#name-form")
const inputName = document.querySelector("#name")



nameForm.addEventListener('submit', () => {
  localStorage.setItem('name', inputName.value)
})




// nameForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log(inputName.value)
//   localStorage.removeItem('name', inputName.value)
// })