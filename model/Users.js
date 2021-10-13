import mongoose from 'mongoose'

const user = mongoose.Schema({
    // Create Business
    businessname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    datecreated:{
        type: Date,
        default: Date.now,
    }, 
})

export default mongoose.model('user', user)