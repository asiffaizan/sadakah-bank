//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber= parseFloat(depositAmount)
    // console.log(depositNumber);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    
    document.getElementById("currentDeposit").innerText = totalDeposit;
    document.getElementById("depositAmount").value = "";
})

//withDraw button event handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
    // console.log(withdrawNumber);
    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    
    document.getElementById("currentWithdraw").innerText = totalWithdraw;
    document.getElementById("withdrawAmount").value = "";
})

// Total Balance

const totalBalance = currentDepositNumber - currentWithdrawNumber;
console.log(totalBalance);