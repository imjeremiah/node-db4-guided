
exports.up = async function (knex) {
  await knex.schema
    .createTable('zoos', table => {
      table.increments()
    })
    .createTable('species', table => {
      table.increments()
    })
    .createTable('animals', table => {
      table.increments()
    })
    .createTable('zoo_animals', table => {
      table.increments()
    })
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
};
