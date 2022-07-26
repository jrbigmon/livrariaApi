'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('livros', 'sigla_pais', { 
      type: Sequelize.DataTypes.STRING(10),
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('livros', 'sigla_pais');
  }
};
