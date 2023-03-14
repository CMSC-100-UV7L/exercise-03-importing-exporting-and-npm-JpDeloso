//Author: Jeanfer Phi N. Deloso
//Student Number: 2021-01227
//Section: CMSC 100 - UV7L
//Date: March 14, 2023


//imports
import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail.js';
import { appendFileSync } from 'node:fs';

//function that generates a unique ID
function generateUniqueID(firstName, lastName){
    var uniqueID = firstName.charAt(0).toLowerCase() // string that contains the first letter of the first name (lowercase)
    uniqueID += lastName.toLowerCase() + uuidv4().slice(0,8) ; //concatenates the last name (lowercase) and the "unique" alphanumeric string of length 8 to the unique id string
    return uniqueID; //returns the generated unique ID
}

//function that saves the account if all conditions are met
function addAccount(account){
    //checks if all fields are present and if the values are of the right data type
    if(account.length === 4 && typeof account[0] === "string" && typeof account[1] === "string" && typeof account[2] === "string" && typeof account[3] === "number"){
        //check if the first name, last name, and the email are non-empty strings
        if(account[0] != "" && account[1] != "" && account[2] != ""){
            //checks if the email is in a valid format
            if(isEmail(account[2])){
                //checks if the age is at least 18 years old
                if(account[3] >= 18){
                    //string that would be appended in the users.txt file (format: first name,last name,email,age,uniqueID)
                    var account = account[0] + "," + account[1] + "," + account[2] + "," + account[3] + "," + generateUniqueID(account[0], account[1]);
                    try {
                        appendFileSync('users.txt', account + "\n"); //appends the string on the user.txt file and adds a new line
                        console.log('Successfully added the account'); //informs the user that the account has been saved or added
                      } catch (err) {
                        console.log("An error occured while adding the account");
                      }
                    return true;
                }else{ //did not met the minimum age requirement 
                    console.log("Age should be at least 18 years old")
                    return false;
                }
            }else{ //email is not in a valid format
                console.log("Ensure that the email is in a valid format");
                return false
            }

        }else{ //there is an empty string
            console.log("The first name, last name, and email should not be empty strings")
            return false;
        }
    }else{ //Not all fields are present or inputs are not of the right data type
        console.log("Not all fields are present or inputs are not of the right data type")
        return false;
    }
}

//exports
export default {addAccount , generateUniqueID}