# Assignment 1 - VAT Calculator

## To use this node module you need to have a app.js with the line 
const VAT = require("./TohJingHan_L1.js");
after this line, you are able to use the functions
* Get countries in a list
* Get the countries VAT
* Update a country's VAT
* Calculate a amount adding the VAT
* Remove the VAT from a amount

### Get countries in a list
To get the list of countries, use `getcocuntry()` to print out the list into the terminal.
* example: `console.log(VAT.getCountry());`
### Get the countries VAT
To get a specific country's VAT, use `getCountryVAT("?")` ***(replace ? with the country name)*** to print out the VAT of the specific country.
* example: `console.log("get VAT of Singapore: " + VAT.getCountryVAT("Singapore"));`
### Update a country's VAT
To update a country's VAT, use `update.VAT("?","??%")` ***(replace ? with the country name and ?? with the new amount)*** to update the VAT of a specific country.
* example: `console.log("update VAT of Singapore: " + VAT.updateVAT("Singapore", "9%"));`
### Calculate a amount adding the VAT
To calculate a amount plus the VAT, use `calculateWithVAT("?",??)` ***(replace ? with the country name and ?? with a number)*** to print out the total amount including VAT.
* example: `console.log("calculate VAT of Singapore with $150: $" + VAT.calculateWithVAT("Singapore", 150));`
### remove the VAT from a amount
To calculate a amount removing the VAT, use `removeVAT("?",??)` ***(replace"?" with the country name and ?? with a number)*** to print out the amount after removing the VAT.
* example: `console.log("get VAT of Singapore: " + VAT.removeVAT("Singapore", 163.5));`