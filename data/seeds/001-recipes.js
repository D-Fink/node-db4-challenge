
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_name: 'French Toast'},
        {recipe_name: 'Brownie In A Mug'},
        {recipe_name: 'Pan-Fried Plank Steak'}
      ]);
    });
};
