
exports.up = async function(knex) {
  await knex.schema 
    .createTable('zoos', (table) => {
        table.increments('zoo_id')
        table.string('zoo_name', 128).unique().notNullable()
        table.string('address', 128).notNullable()
    })
    .createTable('species', (table) => {
        table.increments('species_id')
        table.string('species_name', 256).unique().notNullable()
    })
    .createTable('animals', (table) => {
        table.increments('animal_id')
        table.string('animal_name', 234).notNullable()
        table.integer('species_id')
            .unsigned()
            .notNullable()
            .references('species_id')
            .inTable('species')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') // THIS NEVER HAPPENS
    })
    .createTable('zoo_animals', (table) => {
        table.increments('zoo_animal_id')
        table.integer('zoo_id')
            .unsigned()
            .notNullable()
            .references('zoo_id')
            .inTable('zoos')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('animal_id')
            .unsigned()
            .notNullable()
            .references('animal_id')
            .inTable('animals')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = async function(knex) {
  await knex.schema 
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
};
