
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('user').notNullable().unique().comment('Nome de usuário já existe!');
    table.string('password').notNullable();
    table.boolean('status');
  });
};

exports.down = function(knex) {
return knex.schema.dropTable('users');
};
