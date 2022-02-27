const express = require('express')
const app = express()
const port = 3000
const dbBlog = require('./config/db')

const blogRouter = require('./routes/blog')
const userRouter = require('./routes/user')

dbBlog()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/blog', blogRouter)
app.use('/user', userRouter)

app.get('/', (req,res) => {
    res.send('Hello from API')
})

app.listen(port, () => {
    console.log('BLOG - server started')
})