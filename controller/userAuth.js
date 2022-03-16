const sequelize = require('../config/connection')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Load input validation
const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

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

const login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body)

    if(!isValid) {
        res.status(400).send(errors)
    } else {
        const username = req.body.username
        const pass = req.body.password

        User.findOne({ where: { username: username } }).then(user => {
            if(!user) {
                errors.username = 'User not found'
                res.status(400).send(errors)
            }

            bcrypt.compare(pass, user.password, (err, isMatch) => {
                if(isMatch) {
                    const payload = {
                        id: user.id,
                        username: user.username,
                        firstname: user.firstname,
                        lastname: user.lastname
                    }
                    
                    jwt.sign(payload, process.env.secretOrKey, { expiresIn: '600s' }, (error, token) => {
                        res.status(200).send({ success: true, token: "Bearer " + token })
                    })
                } else {
                    errors.password = 'Password incorrect'
                    res.status(400).send(errors)
                }
            })
        })
    }
}

module.exports = { 
    register,
    login
}