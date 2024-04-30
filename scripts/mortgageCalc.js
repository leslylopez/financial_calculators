"use strict"
console.log("it is working!");

window.onload = init;

function init() {

    //get the button from the page so we can work with them in JS
    const calculateButton = document.querySelector("#calculateButton");

    calculateButton.addEventListener("click", calculate);

}


//input
function calculate() {

let loanAmount = Number (document.querySelector("#loanAmountField").value);
let interestRate = Number (document.querySelector("#interestRateField").value);
let loanTerm = Number (document.querySelector("#loanTermField").value);
let monthlyInterestRate = interestRate/12/100
let numberOfPayments = loanTerm * 12

//do the math

let monthlyPayment = loanAmount* (monthlyInterestRate * Math.pow(1+monthlyInterestRate, numberOfPayments )/ (Math.pow(1+monthlyInterestRate, numberOfPayments )-1))
let totalPayment = monthlyPayment * numberOfPayments;
let totalInterest = totalPayment - loanAmount;

let message =  "Your monthly payment is $ " + monthlyPayment.toFixed(2) + " for " + loanTerm + " years. Your total payment is $ " + totalPayment.toFixed(2) + " and total interest is $ " + totalInterest.toFixed(2);
document.querySelector ("#calculateMessage").innerHTML =message

}
