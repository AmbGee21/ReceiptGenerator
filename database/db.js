import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

function dataBaseConnect(){
    console.log(process.env.MONGO_URL)
    return mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err, connection) => {
        if (err){
            console.log(err)
            console.log('database cannot be connected')
        }else {
            console.log('database successfully connected')
        }
    })
}

dataBaseConnect()

export default dataBaseConnect