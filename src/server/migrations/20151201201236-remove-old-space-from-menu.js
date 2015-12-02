'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Menus',
      'space');
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Menus',
      'space',
      {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      })
  }
};
