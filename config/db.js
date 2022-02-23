const mongoose = require('mongoose')

function dbBlog () {
    main().catch((err) => console.log('server failed', err))
    async function main() {
        await mongoose.connect('mongodb://localhost:27017/my-blog-database')
        console.log('database connected')
    }
}

module.exports = dbBlog