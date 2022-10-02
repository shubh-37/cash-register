var btnCalculateChange = document.querySelector("#calculate-change");
var inputBillAmount = document.querySelector("#bill-amount");
var inputCashGiven = document.querySelector("#cash-given");
var errorMessage = document.querySelector(".error-message");

function hideMessage(){
    errorMessage.style.display = "none";
}

function errorHandler(errMsg){
    errorMessage.style.display = "block"
    errorMessage.innerHTML = errMsg;
}

function clickHandler(){
    hideMessage()
    var billAmt = inputBillAmount.value;
    var cashGiven = inputCashGiven.value;
    if (billAmt > 0){
        if(cashGiven >= billAmt){
            calculateChange(billAmt);
        }else{
            errorHandler("Do you want to wash dishes instead?")
        }
    }else{
        errorHandler("The bill amount should be greater than 0")
    }
}

btnCalculateChange.addEventListener("click", clickHandler);