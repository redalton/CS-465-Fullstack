// access local file system
const fs = require('fs');        
// read the JSON data file
const latest = JSON.parse(fs.readFileSync('./data/latest_news.json', 'utf8'));       
const tips = JSON.parse(fs.readFileSync('./data/vacation_tips.json', 'utf8'));       

const news = (req, res) => {
    pageTitle = process.env.npm_package_description + " - News"; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
    res.render('news', {title: pageTitle, latest, tips});
  };
  
  module.exports = {
    news,
  };