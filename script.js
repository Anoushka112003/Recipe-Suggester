// script.js

document.getElementById("generateRecipe").addEventListener("click", generateRecipe);

function generateRecipe() {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=d03bfb3303ea4ca1a6526b10e1e8c14b`)
        .then(response => response.json())
        .then(data => displayRecipe(data.recipes[0]))
        .catch(error => console.error("Error fetching recipe:", error));
}

function displayRecipe(recipe) {
    const recipeContainer = document.getElementById("recipeContainer");
    const instructionsList = recipe.instructions ? recipe.instructions.split('\n').map(instruction => `<li>${instruction}</li>`).join('') : '<li>No instructions available.</li>';
    
    recipeContainer.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>Ingredients:</h3>
        <ul>${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join("")}</ul>
        <h3>Instructions:</h3>
        <ul>${instructionsList}</ul>
    `;
}
