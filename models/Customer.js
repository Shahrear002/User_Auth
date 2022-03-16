const express = require('express')
const Sequelize = require('sequelize')
const sequelize = require('../config/connection')

const Customer = sequelize.define('Customer', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING(50),
        allowNull: false,

    },
    lastname: {
        type: Sequelize.STRING(30),
        allowNull: false,

    },
    address: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    postcode: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    mobile: {
        type: Sequelize.INTEGER(12),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Customer