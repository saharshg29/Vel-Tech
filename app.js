const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000;


// ------------------------CONNECTION WITH MONGO DB 
const DB = 'mongodb+srv://VelTech:Saharsh%402004@uni.8hdh8.mongodb.net/myFirstDVelTechatabase?retryWrites=true&w=majority'

mongoose.connect(DB)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => console.log(err))

require('./model/Student')

app.use(cors())
app.use(express.json())

app.use(require('./controller/routes/auth'))


app.get('/', (req, res) => {
    res.send('Working properly')
})




app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})