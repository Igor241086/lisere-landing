let rate = prompt("Enter exchange rate");

for (let usd = 10; usd <= 100; usd += 10) {
    console.log(usd + "USD = " + (usd * rate).toFixed(2) + " UAH");
}











// const fromCurrency = prompt('Enter the source currency');
// const toCurrency = prompt('Enter the target currency');
// let amount = prompt('Enter the amount to convert');

// amount = Number(amount);

// if (isNaN(amount)) {
//     alert('You have entered an invalid amount');
// } else {
//     let conversionRate;
//     if (fromCurrency === "USD" && toCurrency === "EUR") {
//         conversionRate = 0.95;
//     } else if (fromCurrency === "EUR" && toCurrency === "USD") {
//         conversionRate = 1.05;
//     } else if (fromCurrency === "EUR" && toCurrency === "UAH") {
//         conversionRate = 43.53;
//     } else if (fromCurrency === "UAH" && toCurrency === "EUR") {
//         conversionRate = 0.023; 
//     } else if (fromCurrency === "USD" && toCurrency === "UAH") {
//         conversionRate = 41.24;
//     } else if (fromCurrency === "UAH" && toCurrency === "USD") {
//         conversionRate = 0.024;
//     } else {
//         conversionRate = null;
//     }

//     let result = conversionRate ? amount * conversionRate : null;

//     if (result !== null) {
//         alert(`Result: ${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`);
//     } else {
//         alert("The exchange rate for the specified currency pair is not set");
//     }
// }