var calculateChange = document.querySelector("#calculate-change");
var inputBillAmount = document.querySelector("#bill-amount");
var inputCashGiven = document.querySelector("#cash-given");

function clickHandler(){
    console.log("clicked");
}

calculateChange.addEventListener("click", clickHandler);