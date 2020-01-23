
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: "4"
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: "2/3 cup"
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          quantity: "2 Ts"
        },
        {
          recipe_id: 1,
          ingredient_id: 4,
          quantity: "8"
        },
        {
          recipe_id: 1,
          ingredient_id: 5,
          quantity: "4 Tbls"
        },
        {
          recipe_id: 1,
          ingredient_id: 6,
          quantity: "to taste"
        },
        {
          recipe_id: 2,
          ingredient_id: 7,
          quantity: "1/4 cup"
        },
        {
          recipe_id: 2,
          ingredient_id: 8,
          quantity: "1/4 cup"
        },
        {
          recipe_id: 2,
          ingredient_id: 9,
          quantity: "2 Tbsp"
        },
        {
          recipe_id: 2,
          ingredient_id: 10,
          quantity: "pinch"
        },
        {
          recipe_id: 2,
          ingredient_id: 3,
          quantity: "tiny pinch"
        },
        {
          recipe_id: 2,
          ingredient_id: 11,
          quantity: "1/4 cup"
        },
        {
          recipe_id: 2,
          ingredient_id: 5,
          quantity: "2 Tbls"
        },
        {
          recipe_id: 2,
          ingredient_id: 12,
          quantity: "1/8 Ts"
        },
        {
          recipe_id: 3,
          ingredient_id: 13,
          quantity: "1.5 lbs"
        },
        {
          recipe_id: 3,
          ingredient_id: 10,
          quantity: "2 Tbls"
        },
        {
          recipe_id: 3,
          ingredient_id: 14,
          quantity: "2 Tbls"
        },
        {
          recipe_id: 3,
          ingredient_id: 15,
          quantity: "2 Ts"
        },
        {
          recipe_id: 3,
          ingredient_id: 5,
          quantity: "4 Tbls"
        }
      ]);
    });
};
