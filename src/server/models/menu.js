'use strict';
module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define('Menu', {
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
        Menu.belongsTo(models.Space, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Menu;
};