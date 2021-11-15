const express = require('express');
const bookController = require('../controllers/book.controller');
const router = express.Router();

router.get('/', (req, res) => {
    bookController.getAllBooks(req, res);
}).get('/publishYear=:publishYear', (req, res) => {
    bookController.getAllBooksByPublishYear(req, res);
}).get('/id=:id', (req, res) => {
    bookController.getSpecificBook(req, res);
}).post('/', (req, res) => {
    bookController.addNewBook(req, res);
}).delete('/id=:id', (req, res) => {
    bookController.deleteBook(req, res);
}).put('/id=:id', (req, res) => {
    bookController.updateBook(req, res);
});

module.exports = router;