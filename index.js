const express = require('express')
require('dotenv').config()
const passport = require('passport')
const sequelize = require('./config/connection')
const userAuthRoutes = require('./routes/userAuth')

sequelize.sync()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/users', userAuthRoutes)

const port = process.env.port || 3000

app.listen(port, () => console.log(`server os running on port ${port}`))