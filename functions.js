//Author: Jeanfer Phi N. Deloso
//Student Number: 2021-01227
//Section: CMSC 100 - UV7L
//Date: March 14, 2023

import { v4 as uuid } from 'uuid';

function generateUniqueID(firstName, lastName){
    var uniqueID = firstName.charAt(0).toLowerCase()
    uniqueID += lastName.toLowerCase() + uuid().slice(0,8) ;
    return uniqueID;
}

console.log(generateUniqueID("Allan", "Turing"));