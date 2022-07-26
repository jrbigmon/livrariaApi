'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('livros', { 
      id: {
        type: Sequelize.DataType.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      titulo: {
        type: Sequelize.DataType.STRING(200),
        allowNull: false
      },
      quantidade_paginas: {
        type: Sequelize.DataType.INTEGER(10),
        allowNull: false
      },
      autor: {
        type: Sequelize.DataType.STRING(200),
        allowNull: false
      },
      ano_lancamento: {
        type: Sequelize.DataType.STRING(200),
        allowNull: false
      },
      estoque: {
        type: Sequelize.DataType.INTEGER(10),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('livros');
    
  }
};
