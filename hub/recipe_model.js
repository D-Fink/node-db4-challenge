const knex = require('knex');
const db = require('../data/migrations/dbConfig.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id){

// SELECT recipe_name, ingredient, quantity FROM recipes_ingredients
// JOIN recipes
// ON recipes_ingredients.recipe_id = recipes.id
// JOIN ingredients
// ON recipes_ingredients.ingredient_id = ingredients.id

    return db('recipes_ingredients')
    .join('recipes', 'recipes_ingredients.recipe_id', 'recipes.id')
    .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
    .select('recipes.recipe_name', 'ingredients.ingredient', 'quantity')
    .where('recipe_id', id)
}

function getInstructions(id){

// SELECT step_number, step_name, instructions FROM steps
// WHERE recipe_id = 1

return db('steps')
.select('step_number', 'step_name', 'instructions')
.where('recipe_id', id)

}