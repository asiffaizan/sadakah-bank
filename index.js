//login button event handler =========>>>
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit button event handler =========>>>>>
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount");
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber); //{for total balance}
    document.getElementById("depositAmount").value = ""; //[for empty input box];
})

//withDraw button event handler =========>>>>>
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1*withdrawNumber);//{for total balance}

    document.getElementById("withdrawAmount").value = "";//[for empty input box];
})

//common function=========>>>>>>>
function updateSpanText(id,amount) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = amount + currentNumber;
    document.getElementById(id).innerText = total;
}

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

