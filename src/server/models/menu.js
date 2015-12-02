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
    },
    spaceId: { 
      type:DataTypes.INTEGER
    },
  }, {
    classMethods: {
      associate: function(models) {
        // models.Menu.belongsTo(models.Space);
      }
    }
  });
  return Menu;
};