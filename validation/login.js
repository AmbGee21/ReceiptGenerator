import validator from "validator"
import isEmpty from "./isempty.js"

export default function validateSignupInput(data){
    let errors = {};

    data.email =!isEmpty(data.email) ? data.email : "";
    data.password =!isEmpty(data.password) ? data.password : "";
   

    if(!validator.isLength(data.email, {min: 2, max: 50})){
        errors.email = "email must be between 2 and 50 characters";
    } 
    
    if(validator.isEmpty(data.email)) {
        errors.email = "email is required"
    }

    if(validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }
     
    return {
        errors, 
        isValid: isEmpty(errors)
    }
}