import validator from "validator"
import isEmpty from "./isempty.js"

export default function validateTransactionInput(data){
    let errors = {};

    data.businessname =!isEmpty(data.businessname) ? data.businessname : "";
    data.email =!isEmpty(data.email) ? data.email : "";
    data.address =!isEmpty(data.address) ? data.address : "";
    data.number =!isEmpty(data.number) ? data.number : "";
    data.itemdescription =!isEmpty(data.itemdescription) ? data.itemdescription : "";
    data.rate =!isEmpty(data.rate) ? data.rate : "";
    data.quantity =!isEmpty(data.quantity) ? data.quantity : "";
    data.clientname =!isEmpty(data.clientname) ? data.clientname : "";
    data.clientemail =!isEmpty(data.clientemail) ? data.clientemail : "";
    data.clientaddress =!isEmpty(data.clientaddress) ? data.clientaddress : "";
    data.clientnumber =!isEmpty(data.clientnumber) ? data.clientnumber : "";
   

    if(!validator.isLength(data.businessname, {min: 2, max: 50})){
        errors.businessname = "businessname must be between 2 and 50 characters";
    } 
    
    if(validator.isEmpty(data.businessname)) {
        errors.businessname = "businessname is required"
    }

    if(validator.isEmpty(data.itemdescription)) {
        errors.itemdescription = "itemdescription field is required"
    }

    if(validator.isEmpty(data.clientname)) {
        errors.clientname = "clientname is required"
    }

    if(validator.isEmpty(data.clientnumber)) {
        errors.clientnumber = "clientnumber is required"
    }
     
    return {
        errors, 
        isValid: isEmpty(errors)
    }
}