const port = 4000;
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
const studentModel = require('./models/student.model').studentModel;

app.get('/students',(req,res)=>{
    studentModel.find({}, (err,data)=> {
        if(err) throw err;
        res.status(200).json(data);
    })
})
app.post('/students',(req,res)=>{
    const {name,age,email} = req.body;

    const student = new studentModel({
        name: name,
        age: age,
        email: email
    })
    student.save((err) => {
        if(err)
            console.log('error while saving',err);
    })
    res.status(200).json(student);
})
app.delete('/students/:id',(req,res)=>{
    const _id = req.params.id;

    studentModel.findByIdAndDelete(_id, (err,data)=>{
        if(err) throw err;
        if(data){
            return res.status(200).json({deletedObj: data});
        }
        return res.status(400).json({deletedObj: 'Not Found'})
    })
})
app.put('/students/:id', (req,res)=>{
    const _id = req.params.id;
    const {name, age, email} = req.body;
    const updatedStudent = {
        name: name,
        age: age,
        email: email
    }
    studentModel.findByIdAndUpdate(_id, updatedStudent, (err,data)=>{
        if(err) throw err;
        if(data) {
            return res.status(201).json({updatedStudent: {_id, ...updatedStudent}})
        }
        return res.status(400).json({updatedStudent: 'Not good ya mas3ood'})
    })
})

mongoose.connect('mongodb://localhost/University', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to DB');
});
app.listen(port, ()=> console.log(`Listening to port ${port}`))