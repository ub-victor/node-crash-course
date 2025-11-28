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


const 

module.exports = {
    blog_index
};