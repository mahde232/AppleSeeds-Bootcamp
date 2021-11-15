//dotenv
const dotenv = require('dotenv');
dotenv.config();
//Express + cors
const express = require('express');
const app = express();
const cors = require('cors');

//app uses
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongodb + mongoose
const mongoose = require('mongoose');

//routes + requests
app.use('/api/books', require('./routes/book.route'));

mongoose.connect(`mongodb+srv://${process.env.DB_URL}/Library?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to DB');
});
// mongoose.connect('mongodb://localhost/Library', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
//     console.log('Connected to DB');
// });
app.listen(process.env.PORT, ()=> console.log(`Listening to port ${process.env.PORT}`))