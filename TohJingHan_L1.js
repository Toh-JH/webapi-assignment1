const country = {
    "Algeria": "19%",
    "Antigua and Barbuda": "15%",
    "Andorra": "4.5%",
    "Argentina": "21%",
    "Armenia": "20%",
    "Aruba": "7%",
    "Australia": "10%",
    "Azerbaijan": "18%",
    "Bahamas": "10%",
    "Bahrain": "10%",
    "Bangladesh": "15%",
    "Barbados": "17.5%",
    "Belize": "12.5%",
    "Bermuda": "0%",
    "Bolivia": "13%",
    "Botswana": "14%",
    "Brazil": "17%",
    "British Virgin Islands": "0%",
    "Brunei": "0%",
    "Bulgaria": "20%",
    "Canada": "5%",
    "Cayman Islands": "0%",
    "Chile": "19%",
    "China": "13%",
    "Colombia": "19%",
    "Cook Islands": "15%",
    "Costa Rica": "13%",
    "Curaçao": "6%",
    "United Arab Emirates (UAE)": "5%",
    "Ecuador": "12%",
    "Egypt": "14%",
    "El Salvador": "13%",
    "Equatorial Guinea": "15%",
    "Ethiopia": "15%",
    "Faroe Islands": "25%",
    "Georgia": "18%",
    "Gibraltar": "0%",
    "Guatemala": "12%",
    "Guernsey": "0%",
    "Hong Kong": "0%",
    "India": "28%",
    "Indonesia": "11%",
    "Iraq": "0%",
    "Isle of Man": "20%",
    "Israel": "17%",
    "Japan": "10%",
    "Jersey": "5%",
    "Kazakhstan": "12%",
    "South Korea": "10%",
    "Kuwait": "0%",
    "Malaysia": "10%",
    "Mauritania": "16%",
    "Mauritius": "15%",
    "Mexico": "16%",
    "Morocco": "20%",
    "New Zealand": "15%",
    "Nigeria": "7.5%",
    "Oman": "5%",
    "Pakistan": "18%",
    "Panama": "7%",
    "Peru": "18%",
    "Philippines": "12%",
    "Puerto Rico": "11.5%",
    "Qatar": "0%",
    "Russia": "20%",
    "Saudi Arabia": "15%",
    "Singapore": "8%",
    "Taiwan": "5%",
    "Tanzania": "18%",
    "Thailand": "7%",
    "Tunisia": "19%",
    "Turkey": "20%",
    "Turks and Caicos": "0%",
    "Ukraine": "20%",
    "Uganda": "18%",
    "United Kingdom": "20%",
    "Uruguay": "22%",
    "USA": "7.25%",
    "Uzbekistan": "12%",
    "Vanuatu": "15%",
    "Venezuela": "16%",
    "Vietnam": "10%",
};
module.exports = {
    // get list of country in database
    getCountry() {
        return Object.keys(country);
    },

    // get country VAT(Tax percentage)
    getCountryVAT(countryName) {
        if (country[countryName]) {
            return JSON.stringify(country[countryName]);
        } else {
            return "Country not found";
        }
    },

    // calculate amount plus tax
    calculateWithVAT(countryName, amount) {
        if (country[countryName]) {
            // Remove the '%' sign and convert to a numeric value
            const taxPercentage = parseFloat(country[countryName]);
            if (!isNaN(taxPercentage)) {
                // Calculate the amount with tax
                const totalAmount = amount + (amount * (taxPercentage / 100));
                return totalAmount.toFixed(2); // Round to 2 decimal places
            } else {
                return "Invalid tax percentage";
            }
        } else {
            return "Country not found";
        }
    },
    // update a country's VAT
    updateVAT(countryName, updatedVAT) {
        if (country[countryName]) {
            // Update the VAT for the specified country
            country[countryName] = updatedVAT;
            return `VAT for ${countryName} updated to ${updatedVAT}`;
        } else {
            return "Country not found";
        }
    },
    //remove the VAT from a calculated amount.
    removeVAT(countryName, amount) {
        if (country[countryName]) {
            // Remove the '%' sign and convert to a numeric value
            const taxPercentage = parseFloat(country[countryName]);
            if (!isNaN(taxPercentage)) {
                // Calculate the amount without VAT
                const amountWithoutVAT = amount / (1 + taxPercentage / 100);
                return amountWithoutVAT.toFixed(2); // Round to 2 decimal places
            } else {
                return "Invalid tax percentage";
            }
        } else {
            return "Country not found";
        }

    },
}