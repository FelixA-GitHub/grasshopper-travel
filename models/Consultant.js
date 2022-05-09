const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class Consultant extends Model {
  // set up method to run on instance data (per consultant) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Consultant.init(
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
      async beforeCreate(newConsultantData) {
        newConsultantData.password = await bcrypt.hash(newConsultantData.password, 10);
        return newConsultantData;
      },

      async beforeUpdate(updatedConsultantData) {
        updatedConsultantData.password = await bcrypt.hash(updatedConsultantData.password, 10);
        return updatedConsultantData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'consultant'
  }
);

module.exports = Consultant;
