
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'eggs'},//1
        {ingredient: 'milk'},//2
        {ingredient: 'cinnamon'},//3
        {ingredient: 'bread slice'},//4
        {ingredient: 'butter'},//5
        {ingredient: 'maple syrup'},//6
        {ingredient: 'flour'},//7
        {ingredient: 'sugar'},//8
        {ingredient: 'cocoa'},//9
        {ingredient: 'salt'},//10
        {ingredient: 'water'},//11
        {ingredient: 'vanilla extract'},//12
        {ingredient: 'flank steak'},//13
        {ingredient: 'black pepper'},//14
        {ingredient: 'dry mustard'}//15
      ]);
    });
};
