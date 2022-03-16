const express = require('express')
const passport = require('passport')
const router = express.Router()
const userAuthController = require('../controller/userAuth')

router.post('/register', userAuthController.register)
router.post('/login', userAuthController.login)
router.post('/customerregister', passport.authenticate('jwt', { session: false }), userAuthController.customerRegistraion)

module.exports = router