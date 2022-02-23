const express = require('express')
const router = express.Router()

const blogController = require('../controller/blog')

router.get('/blog', blogController.getAll)
router.post('/blog', blogController.post)
router.get('/blog/:id', blogController.getById)
router.post('/blog/:id', blogController.edit)
router.delete('/blog/:id', blogController.deleteById)

module.exports = router