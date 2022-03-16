const express = require('express')
const router = express.Router()
const userAuthController = require('../controller/userAuth')

router.post('/register', userAuthController.register)
router.post('/login', userAuthController.login)

module.exports = router