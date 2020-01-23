const express = require('express');

const server = express();

const Hubs = require('./hub/recipe_model.js')

server.use(express.json());

server.get('/api/recipes', (req, res) => {
    Hubs.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})

server.get('/api/recipes/shoppinglist/:id', (req, res) => {
    const {id} = req.params;
    Hubs.getShoppingList(id)
    .then(list => {
        res.json(list)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})

server.get('/api/recipes/instructions/:id', (req, res) => {
    const {id} = req.params;
    Hubs.getInstructions(id)
    .then(steps => {
        res.json(steps)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})

module.exports = server