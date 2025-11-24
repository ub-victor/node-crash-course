const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use((req, res, next) => {
 
  console.log('In the next middleware');
  next();
});

// register view engine
app.set('view engine', 'ejs'); // set ejs as the view engine
// then how is now the files to served are in views ? ans: because by default express looks for a folder named 'views' for the template files
// if views folder is different than 'views', we can set it like this:
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs }); // render the index.ejs file, {} has the data to be passed to the template
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' }); // render the about.ejs file , it took views folder by default because of ejs view engine
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});