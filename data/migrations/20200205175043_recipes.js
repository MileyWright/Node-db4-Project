
exports.up = function(knex) {
  return knex.schema
    .createTable('Recipes', tbl => {
        tbl.increments()
        tbl.string('name', 255)
            .notNullable()
        tbl.string('instructions', 255)
            .notNullable();
    })
    .createTable('Ingredients', tbl => {
        tbl.increments()
        tbl.string('ingredient', 255)
            .notNullable();
    })
    .createTable('Recipe_Book', tbl => {
        tbl.primary(['recipe_id', 'ingredient_id']);
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Recipes')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Ingredients')
        tbl.float('quantity', [0])
            .notNullable()
        tbl.string('unit', 255)
            .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Recipe_Book')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('Recipes')

};
