import addAccount from "./functions.js";

//Test cases
addAccount(["Alan", "Turing", "aturing@w3c.com", 58]); // successful
addAccount(["France", "Castro", "fcastro@w3c.com", "58"]); // wrong data type for the age
addAccount(["Alan", "Turing", "aturing@w3c.com", 17]); // age is below 18
addAccount(["Alan", "", "aturing@w3c.com", 58]); // has an empty string
addAccount(["Alan", "Turing", "aturing@w3c.com"]); // not all fields are present
addAccount(["Alan", "Turing", "aturing@com", 58]); // invalid email format
addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]); // successful