
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {id: 1, name: 'Strawberry ShortCake', instructions: 'Dont forget the strawberrys.'},
        {id: 2, name: 'Pizza', instructions: 'Whatever you do, dont add pineapples on the pizza'},
        {id: 3, name: 'Cupcakes', instructions: 'Try not to put too much batter in the pan before baking'}
      ]);
    });
};
