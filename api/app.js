const express = require('express')
const app = express()

const AppController = require('./src/controller/AppController')

AppController.init(express, app)
