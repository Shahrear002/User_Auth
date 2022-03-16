const express = require('express')
const Sequelize = require('sequelize')
const sequelize = require('../config/connection')

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING(30),
        allowNull: false,

    },
    firstname: {
        type: Sequelize.STRING(50),
        allowNull: false,

    },
    lastname: {
        type: Sequelize.STRING(30),
        allowNull: false,

    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = User