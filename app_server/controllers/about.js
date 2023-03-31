// access local file system
const fs = require('fs');    
     
// read the JSON data file
const abouts = JSON.parse(fs.readFileSync('./data/about_ads.json', 'utf8'));      

const about = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - About';
    res.render('about', {title: pageTitle, abouts});
}

module.exports = {
    about
}