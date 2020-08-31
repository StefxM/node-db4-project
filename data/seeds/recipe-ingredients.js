
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          recipie_id: 1,
          ingredients_id: 1,
          quanity: 1,
          unit: 'part'
        },
        {
          recipie_id: 1,
          ingredients_id: 2,
          quanity: 1,
          unit: 'part'
        },
        {
          recipie_id: 1,
          ingredients_id: 3,
          quanity: 1,
          unit: 'part'
        },
        {
          recipie_id: 2,
          ingredients_id: 4,
          quanity: 2,
          unit: 'cups'
        },
      ]);
    });
};