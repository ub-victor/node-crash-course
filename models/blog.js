const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: tue
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        require: true
    }
}, {timestamps: true});

// Create a model, mongoose.model('ModelName', schema); this will create a collection named 'modelnames' in lowercase plural form

const Blog = mongoose.model('Blog', blogSchema); 

module.exports = Blog;