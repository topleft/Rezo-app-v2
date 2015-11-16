'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Users', 
      'email', 
      {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      }
    ).then(function () {
      queryInterface.changeColumn(
        'Users',
        'username',
        {
          type: Sequelize.STRING,
          required: true,
          allowNull: false
        }
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
      });
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Users', 
      'email', 
      {
        type: Sequelize.STRING 
      }
    ).then(function () {
      queryInterface.changeColumn(
        'Users',
        'username',
        {
          type: Sequelize.STRING,
        }
      ).then(function () {
          queryInterface.dropColumn(
          'Users',
          'admin'
        );
      });
    });  
  }
};
