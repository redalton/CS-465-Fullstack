// access local file system
const fs = require('fs');         
// read the JSON data file
const food = JSON.parse(fs.readFileSync('./data/food.json', 'utf8'));     

/* GET Meals View */
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + " - Meals"; 
    res.render('meals', {title: pageTitle, food});
  };
  
  module.exports = {
    meals,
  };