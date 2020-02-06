
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
        
    })
};

exports.down = function(knex) {
  
};
