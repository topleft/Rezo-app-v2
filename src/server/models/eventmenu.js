'use strict';
module.exports = function(sequelize, DataTypes) {
  var EventMenu = sequelize.define('EventMenu', {
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Event.belongsToMany( models.Menu, { through: EventMenu });
        models.Menu.belongsToMany( models.Event, { through: EventMenu });
      }
    }
  });
  return EventMenu;
};