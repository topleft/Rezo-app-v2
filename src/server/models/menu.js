'use strict';
module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define('Menu', {
    space: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    bevItems: { 
      type:DataTypes.ARRAY(DataTypes.TEXT),
    },
    foodItems: {
      type:DataTypes.ARRAY(DataTypes.TEXT),
    },
    costPerPerson: { 
      type:DataTypes.FLOAT,
      required: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Menu;
};