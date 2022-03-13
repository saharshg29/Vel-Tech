const express = require('express')
const model = require('../../model/Subject')

const subject = express.Router()

//--------------------- CREATE ---------------------

subject.post('/add', (req, res) => {
    let { name, courseCode, Teachers } = req.body;
    let postData = new model.Subject({
        name,
        courseCode,
        Teachers
    });
    postData.save()
        .then(res.status(200).json({ postData }))
        .catch(err => console.error(err))
})

//--------------------- READ ---------------------

subject.get('/view/:id', (req, res) => {

    const id = req.params.id;
    model.Subject.findById(id)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => console.error(err))
})

//---------------------- UPDATE ---------------------

subject.patch('/edit/:id', (req, res) => {

    const id = req.params.id;
    let { name, courseCode, Teachers } = req.body;
    model.Subject.findByIdAndUpdate(
        { _id: id },
        {
            $set: {
                name, courseCode, Teachers
            }
        },
        { new: true }
    )
        .then(updated => {
            res.status(200).json({ updated })
        })
        .catch(err => console.error(err))
})

//---------------------- DELETE ---------------------

subject.delete('/delete/:id', (req, res) => {

    const id = req.params.id;
    model.Subject.findByIdAndDelete(id)
        .then(deletedData => {
            res.status(200).json({
                deletedData
            })
        })
        .catch(err => console.error(err))
})

module.exports = subject