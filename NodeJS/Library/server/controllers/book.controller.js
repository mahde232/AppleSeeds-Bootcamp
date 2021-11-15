const bookModel = require('../models/book.model').bookModel;
const validator = require('validator');


const getAllBooks = (req, res) => {
    bookModel.find({}, (err, data) => {
        if (err) throw err;
        return res.status(200).json(data);
    })
}

const getAllBooksByPublishYear = (req, res) => {
    const { publishYear } = req.params;
    bookModel.find({ publishYear: { $eq: publishYear } }, (err, data) => {
        if (err) throw err;
        return res.status(200).json(data);
    })
}

const getSpecificBook = (req, res) => {
    const { id } = req.params;
    bookModel.findById(id, (err, data) => {
        if (err) return res.status(404).json(err);
        return res.status(200).json(data);
    })
}

const addNewBook = (req, res) => {
    const { name, author, publishYear, language, rating } = req.body;
    const book = new bookModel({
        name: name,
        author: author,
        publishYear: publishYear,
        language: language,
        rating: rating
    })
    book.save((err, data) => {
        if (err) return res.status(404).json(err.message);
        return res.status(200).json(data);
    })
}

const deleteBook = (req, res) => {
    const { id } = req.params;
    bookModel.findByIdAndDelete(id, (err, data) => {
        if (err) return res.status(404).json(err);
        return res.status(200).json(data);
    })
}

const updateBook = (req, res) => {
    const { id } = req.params;
    const { name, author, publishYear, language, rating } = req.body;

    const updatedBook = {
        name: name,
        author: author,
        publishYear: publishYear,
        language: language,
        rating: rating
    }
    bookModel.findByIdAndUpdate(id, updatedBook, {new: true, runValidators: true}, (err, data) => {
        if (err) return res.status(404).json(err.message);
        return res.status(200).json(data);
    })
}

module.exports = {
    getAllBooks,
    getAllBooksByPublishYear,
    getSpecificBook,
    addNewBook,
    deleteBook,
    updateBook
}