"use strict"
console.log("code is running inside futureValueCalc.js");

//don't run stuff until DOM is fully loaded
window.onload = function (){
//look through the HTML document for something with the id of futureValueForm and store it in a variable 
const futureValueForm = document.querySelector("#futureValueForm")

//bind some function to an event for the submission of the form
futureValueForm.addEventListener("submit", calcFutureValue);
resetButton.addEventListener("click", resetForm);
}


//functions that will do the heavy lifting based on events
function calcFutureValue(event){
    event.preventDefault();
    console.log(event.target.deposit.value)

//pull the indo out of the form for me to use
    const deposit = Number(document.querySelector("#deposit").value);
    const interestRate = Number(document.querySelector("#interestRate").value);
    const years = Number(document.querySelector("#years").value);

    //futureValue = deposit * (1+ interestRate) ** years;
    const futureValue = deposit * ( 1 + interestRate) ** years;
    const interestEarned = futureValue - deposit;

    let resultsDiv=document.querySelector("#results");
    resultsDiv.innerHTML = 
    `if your deposit $${deposit.toFixed(2)} in a cd in a cd that earns $${interestRate} and matures in ${years}, your cds ending blanace will be $${futureValue.toFixed(2)} and you would have earned $${interestEarned.toFixed(2)}`

}

function resetForm(){
    alert("if I wasn't ")
}