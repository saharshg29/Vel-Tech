const express = require('express')
const model = require('../../model/Teachers')

const teacher = express.Router()

//--------------------- CREATE ---------------------
teacher.post('/add', (req, res) => {

    let { name, email, password, department, designation } = req.body;
    let postData = model.Teacher({
        name, email, password, department, designation
    });
    postData.save()
        .then(res.status(200).json(postData))
        .catch(err => console.log(err))
})

//--------------------- READ ---------------------

teacher.get('/view/:id', (req, res) => {
    const id = req.params.id;
    model.Teacher.findById(id)
        .then(teacher => {
            res.status(200).json(teacher)
        })
        .catch(err => {
            console.error(err)
        })
})

//---------------------- UPDATE --------------------

teacher.put('/edit/:id', (req, res) => {
    const id = req.params.id;
    let { name, email, password, department, designation } = req.body;
    model.Teacher.findByIdAndUpdate(
        { _id: id },
        {
            $set: {
                name, email, password, department, designation
            }
        },
        { new: true }
    )
        .then(updated => {
            res.status(200).json(updated)
        })
        .catch(err => {
            console.log(err)
        })
})

//---------------------- DELETE ---------------------

teacher.delete('/delete/:id', (req, res) => {

    const id = req.params.id;
    model.Teacher.findByIdAndDelete(id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = teacher