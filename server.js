const express = require ('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectioString = process.env.DB_STRING,
    dbName = 'sample_full_stack'
    collection

    MongoClient.connect(dbConnectioString)
        .then(client => {
            console.log('Connected to Database')
            db = client.db(dbName)
            collection = db.collection('userNames')
        })