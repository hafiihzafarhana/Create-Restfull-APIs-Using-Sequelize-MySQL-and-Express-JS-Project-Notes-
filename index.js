require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const listRoute = require('./routes')

app.use(listRoute)

app.listen(process.env.PORT, (err, res) => {
    if(err) throw err
    console.log(`Berjalan di port ${process.env.PORT}`)
})