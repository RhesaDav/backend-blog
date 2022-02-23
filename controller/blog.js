const Blog = require('../models/Blog')

class blogController {
    static async getAll (req,res) {
        const post = await Blog.find()
        res.send(post)
    }
}

module.exports = blogController