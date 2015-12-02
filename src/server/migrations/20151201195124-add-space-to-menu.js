'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Menus',
      'spaceId',
      {
        type: Sequelize.INTEGER
      })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Menus',
      'spaceId');
  }
};
