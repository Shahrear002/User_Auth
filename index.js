const express = require('express')
require('dotenv').config()
const sequelize = require('./db_config/connection')

sequelize.sync()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const port = process.env.port || 3000

app.listen(port, () => console.log(`server os running on port ${port}`))