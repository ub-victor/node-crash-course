const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

// Create a model, mongoose.model('ModelName', schema); this will create a collection named 'modelnames' in lowercase plural form

const Blog = mongoose.model('Blog', blogSchema); 

module.exports = Blog;