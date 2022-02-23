const mongoose = require('mongoose')
const {Schema} = mongoose;

const blogSchema = new Schema ({
    Title: String,
    Content: String,
    Author: String
})

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog