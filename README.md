# Project Overview

## Hot_Burger_Summer

https://hotburgersummer.netlify.app

## Project Description

Step up your burger game by browsing through new bugers with recepies and images.  Find one that catches your eyes and start grilling! 

Click here to start![Deployable URL]

## API and Data Sample

API Website 
https://developer.edamam.com/edamam-docs-recipe-api
```
"hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d4433ea07d7563ac04c3490f5e364886",
                "label": "The Ultimate Burger",
                "image": "https://www.edamam.com/web-img/05f/05f6b1fbd22e92e2f7ba32026abe1714.jpg",
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/the-ultimate-burger-353654",
                "shareAs": "http://www.edamam.com/recipe/the-ultimate-burger-d4433ea07d7563ac04c3490f5e364886/burger",
                "yield": 6.0,
                "dietLabels": [],
                "healthLabels": [
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Celery-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "2 1/2 pounds skirt steak or sirloin flap steak",
                    "Accompaniments: homemade burger buns ; homemade ketchup ; homemade mustard ; homemade pickle relish ; lettuce and tomato"
                ],
                "ingredients": [
                    {
                        "text": "2 1/2 pounds skirt steak or sirloin flap steak",
                        "weight": 1133.980925,
                        "foodCategory": "meats",
                        "foodId": "food_agvdl6pajjrz8sbghz0cdaz6q4yf",
                        "image": null
                    },
                    {
                        "text": "Accompaniments: homemade burger buns ; homemade ketchup ; homemade mustard ; homemade pickle relish ; lettuce and tomato",
                        "weight": 0.0,
                        "foodCategory": null,
                        "foodId": "food_ainejtibri0iwqamvme2eags55ys",
                        "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
                    }
                ],
                "calories": 2211.26280375,
                "totalWeight": 1133.980925,
                "totalTime": 0.0,
                "cuisineType": [
                    "american"
                ],
```


## Wireframes

![alt text](https://github.com/Deleon06/Hot_Burger_Summer/blob/main/Hot%20Burger%20Summer%20WireFrame.png)

### MVP/PostMVP

#### MVP 

- Find and use external api 
- Render data on page 
- Allow user to get random burger on click

#### PostMVP  

- Allow user to create a list of future burgers to try.
- Allow user to click to see or hide nutrition data
- Allow the user either delete the burger selection if they no longer want to try to cook it or if they didn't like it after they cooked it.
- Allow the user to create a favorite list to revisit by using local storage to save burger info.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | Complete
|June 24| Initial Clickable Model  | Complete
|June 25| MVP | Complete
|June 28| Presentations | Incomplete

## Priority Matrix
![alt text](https://github.com/Deleon06/Hot_Burger_Summer/blob/main/Priority%20Matrix.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML Structure | H | 1hrs| N/A | N/A |
| Basic API Request| H | 3hrs| N/A | N/A |
| More HTML Structure for Rendering Data | H | 1hrs| N/A | N/A |
| Javascript Button functionality| H | 1hrs | N/A | N/A |
| Getting Random Data from API| H | 2hrs | N/A | N/A |
| CSS Styling for Main Page| M | 8hrs| N/A | N/A | 
| Getting Specific Data from API| M | 4hrs | N/A | N/A |
| Media Query| H | 4hrs | N/A | N/A | 
| Building Favorites Functions| H | 3hrs | N/A | N/A | 
| HTML Structure for additional Pages| L | 2hrs | N/A | N/A| 
| CSS Styling for Additional Pages| L | 3hrs| N/A | N/A |
| Implementing Local Storage | L | 2hrs | N/A | N/A |
| Javascript for Deleting Data| M | 2hrs | N/A | N/A |
| Adding more Local Storage | L | 2hrs | N/A | N/A |
| Building Favorites Functions| H | 5hrs | N/A | N/A | 
| Total | H | 43hrs| N/A | N/A |

## Code Snippet

```
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
```

## Change Log
 
