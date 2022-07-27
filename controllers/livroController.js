const { Livro } = require('../models/');
const { Op } = require('sequelize');
const countriesApi = require('../services/Countries');

const livroV1Controller = {
    listBooksFromCountry: async (req, res) =>{
        try {
            const { code } = req.params;

            const books = await Livro.findAll({
                where: { siglaPais: code } 
            });

            if(books.length > 0){
                const pais = await countriesApi.getByAlphaCode(code);

                const flag = pais[0].flags.png;

                return res.status(200).json({flag, books});
            }

            return res.status(404).json("Não há livros desse país!");
        } 
        catch(err) {
            new Error(err.message = "Servidor indisponível!");
            return res.status(500).json(err.message);
        }
        
    },

    listAllBooks: async (req, res) => {
        try {
            const books = await Livro.findAll();
            return res.status(200).json({total: books.length, books})
        }
        catch (err) {
            new Error(err.message = 'página fora do ar');
            return res.status(500).json(err.message);
        }
    },

    listOneBook: async (req, res) => {
        try {
            const { id } = req.params;

            let book = await Livro.findByPk(id, {raw: true});
    
            if(book){
                if(book.siglaPais){
                    const pais = await countriesApi.getByAlphaCode(book.siglaPais);

                    Object.assign(book,{
                        flag: pais[0].flags.png
                    });

                } else {
                    delete book.siglaPais;
                }

                return res.status(200).json(book);
            }

            return res.status(404).json("Livro não encontrado!");
        }
        catch (err) {
            new Error(err.message = "Servidor indisponível!");
            return res.status(500).json(err.message);
        }
    },

    createBook: async (req, res) => {
        try {
             const {
                titulo, 
                quantidadePaginas,
                autor,
                anoLancamento,
                estoque,
                siglaPais
            } = req.body;

            let book = {
                titulo, 
                quantidadePaginas,
                autor,
                anoLancamento,
                estoque,
                siglaPais: siglaPais.toLowerCase()
            }

            const verifyBookExists = await Livro.findOne({
                where: {
                    [Op.and]: [{titulo}, {autor}]
                }
            });

            if(verifyBookExists){
                return res.status(422).json('Livro já cadastrado');
            }

            await Livro.create(book);

            return res.status(201).json({message: "Livro cadastrado com sucesso!", book});

        } 
        catch(err) {
            if (err.name === "SequelizeValidationError"){
                new Error(err.message = 'Campo Vazio!');
                return res.status(404).json(err);
            } 

            if (err.name === "SequelizeConnectionRefusedError"){
                new Error(err.message = 'Servidor fora do ar!');
                return res.status(500).json(err);
            }
        }   
    },

    deleteBook: async (req, res) => {
        try {
            const { id } = req.params;

            let book = await Livro.findByPk(id);

            if(book){
                await Livro.destroy({ where: { id } });
                return res.status(204).json();
            } else {
                return res.status(404).json('Livro não encontrado!');
            }
        }
        catch (err) {
            if (err.name === "SequelizeConnectionRefusedError"){
                new Error(err.message = 'Servidor fora do ar!');
                return res.status(500).json(err.message);
            }
        } 
    },

    updateBook: async (req, res) => {
        try {
            const { id } = req.params;

            const bookOld = await Livro.findByPk(id);

            const {
                titulo,
                quantidadePaginas,
                autor,
                anoLancamento,
                estoque,
                siglaPais
            } = req.body;

            const bookUpdated = {
                titulo,
                quantidadePaginas,
                autor,
                anoLancamento,
                estoque,
                siglaPais: siglaPais.toLowerCase()
            }

            if(bookOld){
                await Livro.update(bookUpdated, { where: {id} });
                return res.status(201).json(bookUpdated);
            } 

            return res.status(404).json('Livro não encontrado!');

        } catch (err) { 
            new Error(err.message = 'Servidor fora do ar!');
            return res.status(500).json(err.message);

        }
    }
}

module.exports = livroV1Controller;