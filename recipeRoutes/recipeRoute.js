const express = require('express');

const db = require('./recipeModal');

const router = express.Router();

// Returns a list of all recipes in the database /recipe/ 
router.get('/', (req, res) => {
    db.getRecipes()
        .then(recipe => {
            res.status(200).json({recipe})
        })
        .catch(err => {
            res.status(500).json({error: 'Could not get the list of recipes'})
        })
})

//Returns a list of the quantity and ingredients of a recipe /recipe/recipeIngredients/id
router.get('/ingredients/:id', (req, res) => {
    const id = req.params.id;
    db.getShoppingList(id)
        .then(shoppingList => {
            if(!shoppingList) {
                res.status(404).json({error: 'The specified ID does not exist.'})
            } else {
                res.status(200).json({shoppingList})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not get the list of Shopping Ingredients'})
        })
})

//Returns a list of instructions of a recipe /recipe/instructions/id
router.get('/instructions/:id', (req, res) => {
    const id = req.params.id;
    db.getInstructions(id)
        .then(instructions => {
            if(!instructions) {
                res.status(404).json({error: 'The specified ID does not exist.'})
            } else {
                res.status(200).json({instructions})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not get the list of Instructions'})
        })
})      




module.exports = router;
