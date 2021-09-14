const nameForm = document.querySelector("#name-form")
const inputName = document.querySelector("#name")



nameForm.addEventListener('submit', () => {
  localStorage.setItem('name', inputName.value)
})
