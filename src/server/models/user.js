'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      required: true,
      defaultValue: false
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        isEmail: true
      } 
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