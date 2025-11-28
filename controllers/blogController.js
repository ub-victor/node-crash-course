const Blog = require('../models/blog');
// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 }) // fetch all the blogs from the database and sort them in descending order of creation time
    .then((result)=>{ // result contains all the blogs
      res.render('index', { title: 'All Blogs', blogs: result }) // render the index.ejs file and pass the blogs to it, the render means send the file to the client
    })
    .catch((err)=>{
      console.log(err);
    })
}


const blog_details = (req, res)=>{
  const id = req.params.id; // get the id from the url
  Blog.findById(id) // find the blog by id
    .then((result)=>{
      res.render('details', { title: 'Blog Details', blog: result }) // render the details.ejs file and pass the blog to it
    })
    .catch((err)=>{
      console.log(err);
    })
}



module.exports = {
    blog_index,
    blog_details
};