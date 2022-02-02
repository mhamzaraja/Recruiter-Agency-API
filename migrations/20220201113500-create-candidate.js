'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('candidate', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
      dob: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
      marital_status: {
        type: DataTypes.STRING
      },
      nationality: {
        type: DataTypes.STRING
      },
      cnic: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      area: {
        type: DataTypes.STRING
      },
      mobile_number: {
        type: DataTypes.INTEGER
      },
      career_level: {
        type: DataTypes.STRING
      },
      experience: {
        type: DataTypes.STRING
      },
      expected_salary: {
        type: DataTypes.DOUBLE
      },
      summary: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('candidate');
  }
};