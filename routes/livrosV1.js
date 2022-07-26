const express = require('express');
const router = express.Router();
const livroV1Controller = require('../controllers/livroController')

/* GET home page. */

router.get('/', livroV1Controller.listAllBooks);
router.post('/create', livroV1Controller.createBook);
router.delete('/:id/destroy', livroV1Controller.deleteBook);
router.put('/:id/update', livroV1Controller.updateBook);
router.get('/:id', livroV1Controller.listOneBook);

module.exports = router;
