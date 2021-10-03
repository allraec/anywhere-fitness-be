
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, username: 'hellokitty', password: '3Dd#$734$5483@!', role_id: 1},
        {user_id: 2, username: 'spacejame', password: 'sdf#4df#$jdf', role_id: 1},
        {user_id: 3, username: 'lovely21', password: '3sd#dhdsf##', role_id: 2}
      ]);
    });
};
