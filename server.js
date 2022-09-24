const express = require ('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectioString = process.env.DB_STRING,
    ddName = ''
    collection