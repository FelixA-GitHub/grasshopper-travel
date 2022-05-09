const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
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
    },
    employer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employer',
        key: 'id'
      }
    },
    consultant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'consultant',
        key: 'id'
      }
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