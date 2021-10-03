
exports.up = async (knex) => {
  await knex.schema
    .createTable('users', () => {
        users.increments('user_id');
        users.string('username').notNullable().unique();
        users.
    })
};

exports.down = function(knex) {
  
};
