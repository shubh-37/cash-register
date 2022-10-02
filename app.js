var btnCalculateChange = document.querySelector("#calculate-change");
var inputBillAmount = document.querySelector("#bill-amount");
var inputCashGiven = document.querySelector("#cash-given");

// function hideMessage(){

// }

function errorHandler(){

}

function clickHandler(){
    var billAmt = inputBillAmount.value;
    var cashGiven = inputCashGiven.value;
    if(billAmt === NaN){
        errorHandler("please enter a number to proceed further!")
    }
    if (billAmt > 0){
        if(cashGiven > billAmt){
            calculateChange(billAmt);
        }else{
            errorHandler("Do you want to wash dishes instead?")
        }
    }else{
        errorHandler("The bill amount should be greater than 0")
    }
}

btnCalculateChange.addEventListener("click", clickHandler);