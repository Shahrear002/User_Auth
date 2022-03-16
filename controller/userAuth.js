const sequelize = require('../config/connection')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Load input validation
const validateRegisterInput = require('../validation/register')

const register = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body)

    if(!isValid) {
        res.status(400).json(errors)
    } else {
        User.findOne({ where: { username: req.body.username } }).then(user => {
            if(user) {
                error = "User already exists"
                res.status(400).json(error)
            } else {
                bcrypt.hash(req.body.password, 10, (error, hash) => {
                    if(error) {
                        console.log(error)
                    }
                    
                    User.create({
                        username: req.body.username,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        password: hash
                    }).then(user => res.status(200).json(user))
                        .catch(error => console.log(error))
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = { register }