//file path for html
var path = require('path');

//routes
module.exports = function(app) {

//go to survey.html
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });
  // if matching route not found then go to home.html
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
};
