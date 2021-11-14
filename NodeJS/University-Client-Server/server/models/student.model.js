const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Student has {name, age, email}
const studentSchema = new Schema({
    name: String,
    age: Number,
    email: String
});

const studentModel = mongoose.model('students', studentSchema);

module.exports = {
    studentModel
}
