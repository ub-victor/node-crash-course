const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://victoire:victoire@node.65il9u7.mongodb.net/node';
mongoose.connect(dbURI)
  .then(() => app.listen(3000), console.log("db connected"))
  .catch((err) => console.log(err));


// middleware & static files
app.use(express.static('public'));

// morgan middleware for logging , it shows in the terminal the requests made
app.use(morgan('dev'));

//manual way
/*
app.get('/add-blog', (req, res)=>{
  const blog = new Blog({
    title: 'New song',
    snippet: "let us  do it",
    body: 'more about it'
  });
  blog.save()
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.log(err);
    })
})

*/

// register view engine
app.set('view engine', 'ejs'); // set ejs as the view engine
// then how is now the files to served are in views ? ans: because by default express looks for a folder named 'views' for the template files
// if views folder is different than 'views', we can set it like this:
// app.set('views', 'myviews');

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' }); // render the about.ejs file , it took views folder by default because of ejs view engine
});

//blog routes

app.get('/blogs', (req, res)=>{
  Blog.find()
    .then((result)=>{
    })
    .catch((err)=>{
      console.log(err);
    })
})


app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

//9  13min