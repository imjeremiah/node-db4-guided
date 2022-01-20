exports.up = async function (knex) {
  await knex.schema
    .createTable('zoos', table => {
      table.increments('zoo_id')
      table.text('zoo_name', 128).notNullable().unique()
      table.text('address', 128).notNullable()
    })
    .createTable('species', table => {
      table.increments('species_id')
      table.string('species_name', 256)
    })
    .createTable('animals', table => {
      table.increments('animal_id')
      table.string('animal_name', 100).notNullable()
      table.integer('')
    })
    .createTable('zoo_animals', table => {
      table.increments('zoo_animal_id')
    })
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
};
