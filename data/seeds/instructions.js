
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1},
        {recipe_id: 2},
        {recipe_id: 3}
      ]);
    });
};
