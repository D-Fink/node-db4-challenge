
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient', 128).notNullable();
  })
  .createTable('steps', tbl => {
      tbl.increments();
      tbl.text('instructions').notNullable();
  })
  .createTable('recipes_ingredients', tbl => {
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('ingredient_quantity')
      .notNullable();

      tbl.primary(['recipe_id', 'ingredient_id']);
  })
  .createTable('recipes_steps', tbl =>{
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('step_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('steps');
      tbl.integer('step_order')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      tbl.primary(['recipe_id', 'step_id']);
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes_steps')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
  
};
