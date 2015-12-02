'use strict';
module.exports = function(sequelize, DataTypes) {
  var EventMenu = sequelize.define('EventMenu', {
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // Event.belongsToMany( Menu, { through: EventMenu });
        // Menu.belongsToMany( Event, { through: EventMenu });
      }
    }
  });
  return EventMenu;
};