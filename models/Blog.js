const mongoose = require('mongoose')
const {Schema} = mongoose;

const blogSchema = new Schema ({
    title: String,
    content: String,
    author: String,
    createdAt: {type: Date, default: Date.now()}
})

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog