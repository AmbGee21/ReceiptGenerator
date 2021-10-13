import validator from "validator"
import isEmpty from "./isempty.js"

export default function validateSignupInput(data){
    let errors = {};

    data.businessname =!isEmpty(data.businessname) ? data.businessname : "";
    data.email =!isEmpty(data.email) ? data.email : "";
    data.password =!isEmpty(data.password) ? data.password : "";

    if(!validator.isLength(data.businessname, {min: 2, max: 50})){
        errors.businessname = "businessname must be between 2 and 50 characters";
    } 
    
    if(validator.isEmpty(data.businessname)) {
        errors.username = "businessname field is required"
    }

    if(validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    }

    if(!validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }

    if(validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }
     
    if(!validator.isLength(data.password , {min: 6, max: 20})) {
        errors.password = "Password must be at least 6 characters"
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    }
}