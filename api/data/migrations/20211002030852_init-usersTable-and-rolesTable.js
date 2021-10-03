
exports.up = async (knex) => {
  await knex.schema
    .createTable('roles', (roles) => {
      roles.increments('role_id').notNullable();
      roles.string('rolename').notNullable();
    })
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('username').notNullable().unique();
      users.string('password').notNullable();
      users.integer('role_id').references('role_id').inTable('roles').notNullable();
    })
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('roles');
};
