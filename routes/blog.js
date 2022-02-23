const express = require('express')
const blogRouter = express.Router()

const blogController = require('../controller/blog')

blogRouter.get('/', blogController.getAll)
blogRouter.post('/', blogController.post)
blogRouter.get('/:id', blogController.getById)
blogRouter.post('/:id', blogController.edit)
blogRouter.delete('/:id', blogController.deleteById)

module.exports = blogRouter