const db = require('../data/dbConfig');

module.exports = {
    getRecipes
}

function getRecipes() {
    return db('Recipe_Book')
        .join('Recipes', 'Recipe_Book.recipe_id', 'Recipes.id')
        .join('Ingredients', 'Recipe_Book.ingredient_id','Ingredients.id')
        .select('name', 'quantity', 'unit', 'ingredient', 'instructions');
}