var btnCalculateChange = document.querySelector("#calculate-change");
var inputBillAmount = document.querySelector("#bill-amount");
var inputCashGiven = document.querySelector("#cash-given");
var errorMessage = document.querySelector(".error-message");
var noOfNote = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000,500,100,20,10,5,1]

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
        if(cashGiven => billAmt){
            var amtToBeReturned = cashGiven-billAmt;
            calculateChange(amtToBeReturned);
        }else{
            errorHandler("Do you want to wash dishes instead?");
        }
    }else{
        errorHandler("The bill amount should be greater than 0");
    }
}

function calculateChange(amountToBeGiven){
    for (let i = 0; i < availableNotes.length; i++){
        var noOfNotes = Math.trunc(amountToBeGiven/availableNotes[i]);
        amountToBeGiven = amountToBeGiven % availableNotes[i];
        noOfNote[i].innerText = noOfNotes;
    }
  
}

btnCalculateChange.addEventListener("click", clickHandler);