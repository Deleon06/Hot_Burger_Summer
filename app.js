const DOMAIN = "https://api.edamam.com/"
const API_KEY = "85911b90e067bce0ee311bd98ed23f76"
const app_id = "a7c8c372"

const burgerForm = document.querySelector("#try-burger-form")
const imageDiv = document.querySelector("#burgerimg-container")
const burgerNameDiv = document.querySelector("#burger-name")
const recipeDiv = document.querySelector("#recipe")
const burgerContainer = document.querySelector("#burger-container")
const randomButton = document.querySelector("#random-burger")
const h2 = document.querySelector("#h2-div")
const welcomeName = `<h2> Welcome ${localStorage.getItem('name')}!</h2>`
const favorites = document.querySelector("#favorites")
const firstFavorite = document.querySelector("#first-favorite")
const favoriteButton = document.querySelector("#add-to-favorites")

let favoriteList = []

h2.insertAdjacentHTML('afterbegin', welcomeName)

const getData = async (input)=> {

  try {
    const response = await axios.get(`${DOMAIN}api/recipes/v2?type=public&q=${input}&app_id=${app_id}&app_key=${API_KEY}&dishType=Sandwiches`)
    let displayedBurger = response.data.hits[0]
    showBurgerData(displayedBurger)
    favoriteButton.style.display = "block"
    return response
  }
  catch (error) {
    console.error(error)
  }
}

const getRandomData = async () => {
  try {
    const response = await axios.get(`${DOMAIN}api/recipes/v2?type=public&q=burger&app_id=${app_id}&app_key=${API_KEY}&dishType=Sandwiches`)
    let randomNumber = Math.floor(Math.random() * response.data.hits.length)
    let randomBurger = response.data.hits[randomNumber]
    showBurgerData(randomBurger)
    favoriteButton.style.display = "block"
    return response
  } catch(error) {
    console.error(error)
  }
}

const showBurgerData = (burger) => {
  
  let burgerName = `<h4>${burger.recipe.label}</h4>`
  let burgerImage = `<img src ="${burger.recipe.image}" style="height: 20%; width: 20%">`
  let burgerRecipe = burger.recipe.ingredientLines

  burgerNameDiv.insertAdjacentHTML('afterbegin', burgerName)
  imageDiv.insertAdjacentHTML('afterbegin', burgerImage)

  let newRecipeDiv = document.createElement('div')
  newRecipeDiv.id = "recipe"
  burgerContainer.append(newRecipeDiv)

  let newUl = document.createElement('ul')
  recipeDiv.append(newUl)
  newUl.textContent = "Recipe: "

  burgerRecipe.forEach(element => {
    let newLi = document.createElement('li')
    recipeDiv.append(newLi)
    newLi.append(element)  
  })
}

burgerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  clearForm(imageDiv)
  clearForm(recipeDiv)
  clearForm(burgerNameDiv)
  const userText = document.querySelector('#try-burger').value
  getData(userText)
  document.querySelector('#try-burger').value = ""
})

randomButton.addEventListener('click', (e) => {
  e.preventDefault() 
  clearForm(imageDiv)
  clearForm(recipeDiv)
  clearForm(burgerNameDiv)
  getRandomData()
})

favoriteButton.addEventListener('click', () => {
  clearForm(firstFavorite);
  let label = document.querySelector("h4").innerHTML
  favoriteList.push(label);
  alert(`${label} has been added to favorites!`)
  localStorage.setItem("first-favorite", JSON.stringify(favoriteList));
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
    if (count > 3) {
      newLi.style.display = "none"
      }
    })
  });

let clearForm = (remove) => {
  while (remove.lastChild) {
    remove.removeChild(remove.lastChild)
  }
}


