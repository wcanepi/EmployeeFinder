//required
const express = require('express');
const path = require('path');

//server
const app = express();

//port
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/public')));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


//The Listener
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});