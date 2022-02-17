const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const URI = require('./controller/KEYS')
const app = express()
const PORT = process.env.PORT || 5000;


// ------------------------CONNECTION WITH MONGO DB 
const DB = URI.URI

mongoose.connect(DB)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => console.log(err))

app.use(cors())
app.use(express.json())

app.use(require('./controller/routes/auth'))


app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})