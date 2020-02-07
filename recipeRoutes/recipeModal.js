const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    getShoppingList
}

function getRecipes() {
    return db('Recipe_Book')
        .join('Recipes', 'Recipe_Book.recipe_id', 'Recipes.id')
        .join('Ingredients', 'Recipe_Book.ingredient_id','Ingredients.id')
        .select('name', 'quantity', 'unit', 'ingredient', 'instructions');
}

function getShoppingList(recipe_id) {
    return db('Recipe_Book')
        .join('Ingredients', 'Recipe_Book.ingredient_id', 'Ingredients.id')
        .select('recipe_id','quantity', 'unit', 'ingredient')
        .where('recipe_id',recipe_id)
}