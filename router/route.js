import express from 'express'
import { signup, login } from '../controller/user.js'
import { createReceipt } from '../controller/transaction.js'
import { findReceipts } from '../controller/transaction.js'
import { findOneUser } from '../controller/transaction.js'


const router = express.Router()

router.get('/testroute', (req, res)=>{
    res.status(200).json({message: 'successful'})
})

router.post('/login', login)
router.post('/signup', signup)
router.post('/createReceipt', createReceipt)
router.get('/findReceipts', findReceipts)
router.get('/findOneUser/:userId', findOneUser)









export default router