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
    }
})