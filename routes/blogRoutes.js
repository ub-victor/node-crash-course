const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();


router.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

router.get('/blogs', (req, res)=>{ // this route will fetch all the blogs from the database
  Blog.find().sort({ createdAt: -1 }) // fetch all the blogs from the database and sort them in descending order of creation time
    .then((result)=>{ // result contains all the blogs
      res.render('index', { title: 'All Blogs', blogs: result }) // render the index.ejs file and pass the blogs to it, the render means send the file to the client
    })
    .catch((err)=>{
      console.log(err);
    })
})

router.post('/blogs', (req, res)=>{ // this route will handle the form submission to create a new blog
  // console.log(req.body) // req.body contains the form data so the body parser middleware is used to parse the form data which mean the body is the defined in the form 
  const blog = new Blog(req.body); // create a new blog using the form data
  blog.save() // save the blog to the database , the blog here is an instance of the Blog model, by instance we mean an object created from a class and the class here is the Blog model which is created using mongoose.model
    .then((result)=>{
      res.redirect('/blogs') // redirect to the /blogs route to see the new blog
    })
    .catch((err)=>{
      console.log(err);
    })
})

router.get('/blogs/:id', (req, res)=>{
  const id = req.params.id; // get the id from the url
  Blog.findById(id) // find the blog by id
    .then((result)=>{
      res.render('details', { title: 'Blog Details', blog: result }) // render the details.ejs file and pass the blog to it
    })
    .catch((err)=>{
      console.log(err);
    })
})

router.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});


module.exports = router;
