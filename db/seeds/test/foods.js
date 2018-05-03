
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE foods RESTART IDENTITY')
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {name: 'Apple', calories: 120},
        {name: 'Banana', calories: 140},
        {name: 'Pear', calories: 130},
        {name: '90% Beef', calories: 200},
        {name: 'Whole Wheat Bread', calories: 140},
        {name: 'Cheddar Cheese', calories: 110},
        {name: 'Large Brown Egg', calories: 70},
        {name: '2% Milk', calories: 120},
        {name: 'Spinach', calories: 14},
        {name: 'Kale', calories: 30},
        {name: 'Raspberries', calories: 90},
        {name: 'Blackberries', calories: 90},
        {name: 'Chicken Breast', calories: 110},
        {name: 'Turkey Breast', calories: 130},
        {name: 'Pork Sausage', calories: 180},
        {name: 'Clif Builder Bar', calories: 270},
        {name: 'Quest Nutrition Bar', calories: 180},
        {name: 'Water', calories: 0},
        {name: 'White Rice', calories: 150},
        {name: 'Split Green Peas', calories: 160},
        {name: 'Black Lentils', calories: 160}
      ]);
    });
};
