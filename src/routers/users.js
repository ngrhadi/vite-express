const { Router } = require('express')
const user = require('../api/controllers/users')
const authorizer = require('../middleware/authorizer')

const router = new Router()

router.get('/userlist', authorizer, user.listAllUsers)

module.exports = router
