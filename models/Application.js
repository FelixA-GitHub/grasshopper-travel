const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Application extends Model { }

Application.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        job_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'job',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'application'
    }
);

module.exports = Application;