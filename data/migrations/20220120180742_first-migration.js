
exports.up = async function (knex) {
  await knex.schema
    .createTable('zoos')
    .createTable('species')
    .createTable('zoo_animals')
    .createTable()
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
};
