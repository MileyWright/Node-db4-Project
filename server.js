const express = require('express');

// const RecipeRouter = require('./recipeRoutes/recipeRoute');

const server = express();

server.use(express.json());
// server.use('/recipe', RecipeRouter);

module.exports = server;
