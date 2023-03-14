import functions from "./functions.js";

//Test cases for the 1st function
console.log(functions.generateUniqueID("Alan","Turing"));
console.log(functions.generateUniqueID("Ted","Nelson"));

//Test cases for the 2nd function
functions.addAccount(["Alan", "Turing", "aturing@w3c.com", 58]); // successful
functions.addAccount(["France", "Castro", "fcastro@w3c.com", "58"]); // wrong data type for the age
functions.addAccount(["Alan", "Turing", "aturing@w3c.com", 17]); // age is below 18
functions.addAccount(["Alan", "", "aturing@w3c.com", 58]); // has an empty string
functions.addAccount(["Alan", "Turing", "aturing@w3c.com"]); // not all fields are present
functions.addAccount(["Alan", "Turing", "aturing@com", 58]); // invalid email format
functions.addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]); // successful