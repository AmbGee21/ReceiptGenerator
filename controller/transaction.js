import transaction from "../model/Transaction.js"
import mongoose from "mongoose";
import validateTransactionInput from "../validation/transaction.js"


export const createReceipt = (req,res) => {
  
  
   const newreceipt = new transaction({ 
       businessname: req.body.businessname,
       email: req.body.email,
       address: req.body.address,
       number: req.body.number,
       itemdescription: req.body.itemdescription,
       rate: req.body.rate,
       quantity: req.body.quantity,
       clientname: req.body.clientname,
       clientemail: req.body.clientemail,
       clientaddress: req.body.clientaddress,
       clientnumber: req.body.clientnumber,
    })
    newreceipt.save()
 .then(newreceipt => res.json({receipt: newreceipt}))
 .catch(err => {
     console.log(err)
     res.status(400).json({message:"Something went wrong"})})
}

 export const findReceipts =  async(req,res) => {
        const findReceipts = await transaction.find({ })
        return res.status(200).json({message: " successful", receipt:findReceipts})
          
}

export const findOneUser =  async(req,res) => {
   let userId = {}
   const findOneUser = await transaction.findOne({ userId })
   return res.status(200).json({message: " successful", receipt:findOneUser})
     
}


