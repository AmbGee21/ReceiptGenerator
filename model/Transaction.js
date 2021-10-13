import mongoose from 'mongoose'

const transaction = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    // FROM
    businessname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
    },
    itemdescription:{
        type: String,
        required: true,
    },
    rate:{
        type: Number,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    datecreated:{
        type: Date,
        default: Date.now,
    }, 


    // BILL TO
    clientname:{
        type: String,
        required: true,
    },
    clientemail:{
        type: String,
        required: true,
    },
    clientaddress:{
        type: String,
        required: true,
    },
    clientnumber:{
        type: Number,
        required: true,
    },
})

export default mongoose.model('transaction', transaction)