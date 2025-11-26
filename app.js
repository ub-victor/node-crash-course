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

// to parse urlencoded form data
app.use(express.urlencoded({ extended: true })); // this will help to get the form data from the request body

// morgan middleware for logging , it shows in the terminal the requests made
app.use(morgan('dev'));

//manual way
/*
app.get('/add-blog', (req, res)=>{
  const blog = new Blog({
    title: 'School impact neg/pos',
    snippet: "How school affects us in both positive and negative ways",
    body: 'School plays a crucial role in shaping our lives. On the positive side, it provides us with knowledge, social skills, and opportunities for personal growth. It helps us develop critical thinking and problem-solving abilities. Additionally, school fosters friendships and a sense of community. However, there are also negative aspects to consider. The pressure to perform well academically can lead to stress and anxiety. Bullying and peer pressure can negatively impact self-esteem. Furthermore, the rigid structure of traditional education may stifle creativity and individuality. Overall, while school has its drawbacks, the benefits it offers in terms of education and social development are significant.'
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

app.get('/blogs', (req, res)=>{ // this route will fetch all the blogs from the database
  Blog.find().sort({ createdAt: -1 }) // fetch all the blogs from the database and sort them in descending order of creation time
    .then((result)=>{ // result contains all the blogs
      res.render('index', { title: 'All Blogs', blogs: result }) // render the index.ejs file and pass the blogs to it, the render means send the file to the client
    })
    .catch((err)=>{
      console.log(err);
    })
})

app.post('/blogs', (req, res)=>{
  // console.log(req.body) // req.body contains the form data so the body parser middleware is used to parse the form data which mean the body is the defined in the form 
  const blog = new Blog(req.body); // create a new blog using the form data
  blog.save() // save the blog to the database
    .then((result)=>{
      res.redirect('/blogs') // redirect to the /blogs route to see the new blog
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