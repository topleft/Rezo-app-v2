'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return Item;
};