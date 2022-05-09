const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class Employer extends Model {
  // set up method to run on instance data (per Employer) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Employer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newEmployerData) {
        newEmployerData.password = await bcrypt.hash(newEmployerData.password, 10);
        return newEmployerData;
      },

      async beforeUpdate(updatedEmployerData) {
        updatedEmployerData.password = await bcrypt.hash(updatedEmployerData.password, 10);
        return updatedEmployerData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employer'
  }
);

module.exports = Employer;
