
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'French Toast'},
        {recipe_name: 'Brownie In A Mug'},
        {recipe_name: 'Pan-Fried Plank Steak'}
      ]);
    });
};
