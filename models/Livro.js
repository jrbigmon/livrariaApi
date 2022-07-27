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

        quantidadePaginas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'quantidade_paginas'
        },

        autor: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

        anoLancamento: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'ano_lancamento'
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