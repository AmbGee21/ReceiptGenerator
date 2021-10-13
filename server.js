import express from 'express'
import mongoose from 'mongoose'
import db from './database/db.js'
import router from './router/route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api', router)

const port = process.env.PORT || 2000

app.get('/', (req, res)=> res.send('you are doing well'))
app.listen(port, ()=> console.log(`server is running on ${port}`))





