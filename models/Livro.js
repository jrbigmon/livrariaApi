module.exports = (connection, DataTypes) => {
    const Livro = connection.define("Livro", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        titulo: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

        quantidade_paginas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        autor: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

        ano_lancamento: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        estoque: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        siglaPais: {
            type: DataTypes.STRING(10),
            field: 'sigla_pais'
        }
    }, {
        tableName: "livros",
        timestamps: false
    });

    return Livro;
}