'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Items', 
      'name', 
      {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      }
      ).then(function () {
      queryInterface.changeColumn(
        'Items',
        'type',
        {
          type: Sequelize.STRING,
          required: true,
          allowNull: false
        }
      );
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Items', 
      'name', 
      {
        type: Sequelize.STRING
      }
      ).then(function () {
      queryInterface.changeColumn(
        'Items',
        'type',
        {
          type: Sequelize.STRING
        }
      );
    });
  }
};
