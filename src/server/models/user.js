'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        isEmail: true
      } 
    },
    googleProfileID: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Item);
      }
    }
  });
  return User;
};