
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', table => {
        table.increments();
        table.string('recipe_name')
        .unique()
        .notNullable();
    })

    .createTable('instructions', table => {
        table.increments();
        table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('steps', table => {
        table.increments();
        table.integer('step_number')
            .unsigned()
            .notNullable();
        table.string('step')
            .notNullable();
        table.integer('instruction_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('instructions')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('ingredients', table => {
        table.increments();
        table.string('ingredient_name')
            .unique()
            .notNullable();
    })
    .createTable('recipe_ingredients', table => {
        table.increments();
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.float('quantity')
            .unsigned()
            .notNullable();
        table.string('unit')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes')
};
