import './config/database.js'
import express from 'express'
import AppController from './src/controllers/AppController.js'

const app = express()

AppController.init(express, app)
