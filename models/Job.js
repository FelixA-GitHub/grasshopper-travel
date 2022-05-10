const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Job extends Model {}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    salary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'job'
  }
);

module.exports = Job;