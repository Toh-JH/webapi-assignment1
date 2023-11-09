const VAT = require("./TohJingHan_L1.js");

console.log(VAT.getCountry());
console.log("get VAT of Singapore: " + VAT.getCountryVAT("Singapore"));
console.log("update VAT of Singapore: " + VAT.updateVAT("Singapore", "9%"));
console.log("get VAT of Singapore: " + VAT.getCountryVAT("Singapore"));
console.log("calculate VAT of Singapore with $150: $" + VAT.calculateWithVAT("Singapore", 150));
console.log("get VAT of Singapore: " + VAT.removeVAT("Singapore", 163.5));