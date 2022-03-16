const express = require('express')
const router = express.Router()
const userAuthController = require('../controller/userAuth')

router.post('/register', userAuthController.register)

module.exports = router