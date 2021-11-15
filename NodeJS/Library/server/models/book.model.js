const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
        min: [0, `year can't be negative`],
        max: [new Date().getFullYear(), `year can't be in the future`]
    },
    language: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    rating: {
        type: Number,
        required: true,
        min: [0, "rating can't be less than 0"],
        max: [5, "rating can't be more than 5"]
    }
});

const bookModel = mongoose.model('books', bookSchema);

module.exports = {
    bookModel
}
