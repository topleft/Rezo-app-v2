'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'googleProfileID',
      {
        type: Sequelize.STRING
      }).then(function () {
        queryInterface.removeColumn(
          'Users',
          'admin'
          );
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Users',
      'googleProfileID'
      ).then(function () {
        queryInterface.addColumn(
          'Users',
          'admin',
          {
            type: Sequelize.BOOLEAN,
            required: true,
            defaultValue: false 
          }
        );
      })

  }
};
