'use strict';

const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON(){
      return {
        ...this.get(),
        id: undefined
      }
    }
  }
  candidate.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'must have a name'},
        notEmpty: {msg: 'name must not be empty'}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'must have an email'},
        notEmpty: {msg: 'email must not be empty'},
        isEmail: {msg: 'must be a valid email address'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'must have a password'},
        notEmpty: {msg: 'password must not be empty'}
      }
    },
    dob: DataTypes.STRING,
    gender: DataTypes.STRING,
    marital_status: DataTypes.STRING,
    nationality: DataTypes.STRING,
    cnic: DataTypes.STRING,
    city: DataTypes.STRING,
    area: DataTypes.STRING,
    mobile_number: DataTypes.INTEGER,
    career_level: DataTypes.STRING,
    experience: DataTypes.STRING,
    expected_salary: DataTypes.INTEGER,
    summary: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'candidate',
    modelName: 'candidate',
  });
  return candidate;
};