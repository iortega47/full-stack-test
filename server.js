const express = require ('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 4700

let db,
    dbConnectioString = process.env.DB_STRING,
    dbName = 'sample_full_stack',
    collection

MongoClient.connect(dbConnectioString)
        .then(client => {
            console.log('Connected to Database')
            db = client.db(dbName)
            collection = db.collection('userNames')
        })

//Middleware
app.set('view engine', 'ejs') // setting up our view engine to be ejs to be use as a template to spit out html.
app.use(express.static('public')) //seting up a folder to hold the html, css, main.js files to be accessed by our app.
app.use(express.urlencoded({extended:true})) // helps us parse urls
app.use(express.json()) //helps express parse the jason and it aloows us to understand the data being sent back and forth 
app.use(cors()) //allows for cross origin request and stops the cors error from happening in the browser


app.get('/', async (req, res) => {
    try {
        response.render('index.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})