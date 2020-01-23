
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number: 1,
          step_name: 'Make the egg mixture',
          instructions: 'In a medium Bowl, whisk together the eggs, milk, and cinnamon.',
          recipe_id: 1
        },
        {
          step_number: 2,
          step_name: 'Soak the bread slices in egg mixture',
          instructions: 'Place each slice of bread into the milk egg mixture, allowing the bread to soak.',
          recipe_id: 1
        },
        {
          step_number: 3,
          step_name: 'Fry the french toast',
          instructions: 'Melt some butter in a large skillet over medium high heat. Place soaked bread slices onto the hot skillet and fry until browned.',
          recipe_id: 1
        },
        {
          step_number: 4,
          step_name: 'Serve',
          instructions: 'Serve with hot butter and maple syrup.',
          recipe_id: 1
        },
        {
          step_number: 1,
          step_name: 'Add dry ingredients to mug and stir',
          instructions: 'Place flour, sugar, cocoa, salt, and cinnamon in a microwave safe ceramic mug. Stir well and break up any clumps.',
          recipe_id: 2
        },
        {
          step_number: 2,
          step_name: 'Add wet ingredients and stir',
          instructions: 'Add the butter, water, and vanilla to the cup and stir until the mixture is smooth.',
          recipe_id: 2
        },
        {
          step_number: 3,
          step_name: 'Zap in microwave',
          instructions: 'Place mug in microwave and heat on high for 1m30s.',
          recipe_id: 2
        },
        {
          step_number: 4,
          step_name: 'Serve',
          instructions: 'Let cool for a minute and serve.',
          recipe_id: 2
        },
        {
          step_number: 1,
          step_name: 'Tenderize steak with shallow cuts',
          instructions: 'Remove steak from fridge 30m before cooking. Cut away any tough connective tissue. Using knife, poke small cuts, at an angle, into the meat about an inch apart. Turn steak over and repeat making the curs parallel with the other side.',
          recipe_id: 3
        },
        {
          step_number: 2,
          step_name: 'Rub with salt, pepper, dry mustard, butter',
          instructions: 'Sprinkle one side of the steak with salt and pepper, and dry mustard and rub with butter. Flip steak over and repeat.',
          recipe_id: 3
        },
        {
          step_number: 3,
          step_name: 'Sear steak in hot frying pan',
          instructions: 'Heat cast iron frying pan on high. Place steak in hot pan and sear for 2-3 minutes. Flip and repeat.',
          recipe_id: 3
        },
        {
          step_number: 4,
          step_name: 'Remove from heat',
          instructions: 'Remove the pan from the heat and let steak continue to cook for 5-10 minutes with the residual heat.',
          recipe_id: 3
        },
        {
          step_number: 5,
          step_name: 'Check for doneness',
          instructions: 'Insert meat thermometer into thickest part of steak-125 degrees for rare, 130 for medium rare.',
          recipe_id: 3
        },
        {
          step_number: 6,
          step_name: 'Let steak rest',
          instructions: 'remove steak from pan to a cutting board, tent with aluminum foil, and let rest for 10 minutes.',
          recipe_id: 3
        },
        {
          step_number: 7,
          step_name: 'Thinly slice',
          instructions: 'Cut meat into very thin slices at an angle across the grain of the meat.',
          recipe_id: 3
        },
        {
          step_number: 8,
          step_name: 'Boil juices, deglaze pan, add butter to make sauce',
          instructions: 'Return any juices from steak to pan and heat over high. Deglaze the pan with a little water, scraping up and browned bits. When water has mostly boiled down, add a little butter to the pan for a nice sauce.',
          recipe_id: 3
        }
      ]);
    });
};
