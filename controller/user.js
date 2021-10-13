import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import user from "../model/users.js"
import dotenv from "dotenv"
import validateSignupInput from "../validation/signup.js"
import validateLoginInput from "../validation/login.js"


dotenv.config()

export const login = async(req,res) => {
    console.log(req.body)

    const {errors, isValid} = validateLoginInput(req.body);    

    if( !isValid ){
        return res.status(400).json(errors)
    }
        
    const { email, password } = req.body;
     
    try{
        const existingUser = await user.findOne({email});
        
        if(!existingUser) {
            return res.status(404).json({message: "user doesn't exist"})  
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) {
            return res.status(404).json({message: "invalid password"})
        }

       const payload = { id: existingUser._id, email: existingUser.email};
       const token = jwt.sign(payload, process.env.SECRETKEY, {expiresIn:"1h"});

       res.status(200).json({success: true, token: 'Bearer ' + token});
    } catch(err){
        console.log(err)
        res.status(500).json({message: "something  went wrong"})
    }
}

export const signup = async(req,res) => {
    console.log(req.body)
    const {errors, isValid} = validateSignupInput(req.body);    
    if(!isValid){
        return res.status(400).json(errors)
    }

    const {businessname, email, password} = req.body;

    try{
        const existingUser = await user.findOne({email});
        if(existingUser) return res.status(404).json({message: "user already exists"})
        if (password != password) return res.status(404).json({message: "passwords don't match"})


        const hashPassword = await bcrypt.hash(password, 12);

        const result = await user.create({email, password: hashPassword, businessname});

        const payload = {email: result.email, id: result._id, businessname: result.businessname};

        const token = jwt.sign(payload, process.env.SECRETKEY, {expiresIn:"1h"});

        res.status(200).json({success: true, token:'Bearer ' + token});

      } catch(err){
          console.log(err)
        res.status(500).json({message: "something went wrong"})

    }
}