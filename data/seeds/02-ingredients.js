
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {id: 1, ingredient: 'eggs'},
        {id: 2, ingredient: 'cheese'},
        {id: 3, ingredient: 'sugar'}
      ]);
    });
};
