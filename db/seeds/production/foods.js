
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'Apple', calories: 120},
        {id: 2, name: 'Banana', calories: 140},
        {id: 3, name: 'Pear', calories: 130},
        {id: 4, name: '90% Beef', calories: 200},
        {id: 5, name: 'Whole Wheat Bread', calories: 140},
        {id: 6, name: 'Cheddar Cheese', calories: 110},
        {id: 7, name: 'Large Brown Egg', calories: 70},
        {id: 8, name: '2% Milk', calories: 120},
        {id: 9, name: 'Spinach', calories: 14},
        {id: 10, name: 'Kale', calories: 30},
        {id: 11, name: 'Raspberries', calories: 90},
        {id: 12, name: 'Blackberries', calories: 90},
        {id: 13, name: 'Chicken Breast', calories: 110},
        {id: 14, name: 'Turkey Breast', calories: 130},
        {id: 15, name: 'Pork Sausage', calories: 180},
        {id: 16, name: 'Clif Builder Bar', calories: 270},
        {id: 17, name: 'Quest Nutrition Bar', calories: 180},
        {id: 18, name: 'Water', calories: 0},
        {id: 19, name: 'White Rice', calories: 150},
        {id: 20, name: 'Split Green Peas', calories: 160},
        {id: 21, name: 'Black Lentils', calories: 160}
      ]);
    });
};
