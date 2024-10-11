const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const pokemon = sequelize.define('pokemon', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    altura: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: true
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    nivelpoder: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = pokemon;