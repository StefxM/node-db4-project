
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, step: 'Cut up all fish and combine with lemon juice', instruction_id: 1},
        {step_number: 2, step: 'Let fish marinate in lemon juice and spices', instruction_id: 1},
        {step_number: 2, step: 'Combine chicken , rice and spices in pot and let it boil', instruction_id: 2},
        {step_number: 1, step: 'Combine all ingredients into the wok', instruction_id: 3},
        {step_number: 2, step: 'Over a hot flame, sautee', instruction_id: 3},
        
      ]);
    });
};
