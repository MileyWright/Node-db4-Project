
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe_Book').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe_Book').insert([
        {recipe_id: '1', ingredient_id: '1', quantity: '3', unit: 'large'},
        {recipe_id: '1', ingredient_id: '3', quantity: '1.5', unit: 'cup(s)'},
        {recipe_id: '2', ingredient_id: '2', quantity: '1', unit: 'cup'},
        {recipe_id: '3', ingredient_id: '1', quantity: '2', unit: 'medium'},
        {recipe_id: '3', ingredient_id: '3', quantity: '0.75', unit: 'cup(s)'},
      ]);
    });
};
