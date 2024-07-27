const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Send payment request to API
    const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`the total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
