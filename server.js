const express = require('express')
const app = express()
const port = 3000
const dbBlog = require('./config/db')
const blogRouter = require('./routes/blog')

const router = require('./routes/blog')

dbBlog()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/blog', blogRouter)

app.get('/', (req,res) => {
    res.send('Hello from API')
})

app.listen(port, () => {
    console.log('BLOG - server started')
})