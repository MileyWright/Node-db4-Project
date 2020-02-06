const express = require('express');

const db = require('./recipeModal');

const router = express.Router();

// /recipe
router.get('/', (req, res) => {
    db.getRecipes()
        .then(recipe => {
            res.status(200).json({recipe})
        })
        .catch(err => {
            res.status(500).json({error: 'Could not get the list of recipes'})
        })
})

module.exports = router;
