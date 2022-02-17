const express = require('express')
const model = require('../../model/Student')

const student = express.Router()


//--------------------- CREATE ---------------------
student.post('/add', (req, res) => {

    let { name, email, password, YOE } = req.body;
    let postData = new model.Student({
        name, email, password, YOE
    });
    postData.save()
        .then(res.status(200).json({ postData }))
        .catch(err => console.error(err))
})


//--------------------- READ ---------------------
student.get('/view/:id', (req, res) => {

    const id = req.params.id;
    model.Student.findOne({ _id: id })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => console.error(err))
})


//---------------------- UPDATE ---------------------
student.patch('/edit/:id', (req, res) => {
    
    const id = req.params.id;
    let { name, email, password, YOE, mentor, Subject, Teachers } = req.body;
    model.Student.findByIdAndUpdate(
        { _id: id },
        {
            $set: {
                name, email, YOE, password, mentor, Subject, Teachers
            }
        },
        { new: true }
    )
        .then(updated => {
            res.status(200).json(updated)
        })
        .catch(err => console.log(err))
})


//---------------------- DELETE ---------------------
student.delete('/delete/:id', (req, res) => {

    const id = req.params.id;
    model.Student.findByIdAndDelete(id)
        .then(deletedData => {
            res.status(200).json(deletedData)
        })
        .catch(err => console.log(err))
})

module.exports = student