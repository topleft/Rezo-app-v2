'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      space: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      bevItems: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      foodItems: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      costPerPerson: {
        type: Sequelize.FLOAT,
        required: true        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Menus');
  }
};