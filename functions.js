//Author: Jeanfer Phi N. Deloso
//Student Number: 2021-01227
//Section: CMSC 100 - UV7L
//Date: March 14, 2023

import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail.js';

function generateUniqueID(firstName, lastName){
    var uniqueID = firstName.charAt(0).toLowerCase() 
    uniqueID += lastName.toLowerCase() + uuidv4().slice(0,8) ;
    return uniqueID;
}


function addAccount(account){
    if(account.length === 4 && typeof account[0] === "string" && typeof account[1] === "string" && typeof account[2] === "string" && typeof account[3] === "number"){
        if(account[0] != "" && account[1] != "" && account[2] != ""){
            if(isEmail(account[2])){
                if(account[3] >= 18){
                    return true;
                }else{
                    console.log("Age should be at least 18 years old")
                    return false;
                }
            }else{
                console.log("Ensure that the email is in a valid format");
                return false
            }

        }else{
            console.log("The first name, last name, and email should not be empty strings")
            return false;
        }
    }else{
        console.log("Not all fields are present or inputs are not of the right data type")
        return false;
    }
}

console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 23]));
console.log(generateUniqueID("Allan", "Turing"));   