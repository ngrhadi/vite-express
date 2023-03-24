const { Router } = require('express')
const auth = require('../api/controllers/authentication')

const router = new Router()

router.post('/signup', auth.signUpUsers)
router.post('/login', auth.signIn)



module.exports = router
