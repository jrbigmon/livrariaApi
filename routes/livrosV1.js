const express = require('express');
const router = express.Router();
const livroV1Controller = require('../controllers/livroController')

/* GET home page. */

router.get('/all', livroV1Controller.listAllBooks);
router.get('/all/:code', livroV1Controller.listBooksFromCountry);
router.post('/create', livroV1Controller.createBook);
router.delete('/:id/destroy', livroV1Controller.deleteBook);
router.put('/:id/update', livroV1Controller.updateBook);
router.get('/:id', livroV1Controller.listOneBook);

module.exports = router;
