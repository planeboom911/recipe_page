
const apiLink = 'https://www.themealdb.com/api/json/v1/1/random.php'
const imageLoading = "https://i.giphy.com/uIJBFZoOaifHf52MER.webp"

const getRandomRecipe = async () => {
  const x = await fetch(apiLink);
  const recipe = (await x.json()).meals[0]
  return recipe
}

document.addEventListener('DOMContentLoaded', async () => {
  const r = await getRandomRecipe();
  console.log(r);
  document.getElementById('recipeImg').style.setProperty('--bg', `url(${r.strMealThumb})`)
})