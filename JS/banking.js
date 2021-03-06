// deposit submit 
document.getElementById('deposit-submit').addEventListener('click', function(){

    // new deposit amount 
    const newDeposit = document.getElementById('new-deposit');
    const newDepositText = newDeposit.value;
    const newDepositAmount = parseFloat(newDepositText);

    // current deposit amount 
    const currentDeposit = document.getElementById('current-deposit');
    const currentDepositText = currentDeposit.innerText;
    const currentDepositAmount = parseFloat(currentDepositText);

    // total deposit 
    const totalDeposit = currentDepositAmount + newDepositAmount;
    currentDeposit.innerText = totalDeposit;
    newDeposit.value = '';

    // updating balance 
    // incase of deposite 
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);

    const totalBalance = currentBalanceAmount + newDepositAmount;
    currentBalance.innerText = totalBalance;


})



// withdraw submit 
document.getElementById('withdraw-submit').addEventListener('click', function(){
    

    // new deposit amount 
    const newWithdraw = document.getElementById('new-withdraw');
    const newWithdrawText = newWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    // current withdraw amount 
    const currentWithdraw = document.getElementById('current-withdraw');
    const currentWithdrawText = currentWithdraw.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawText);

    // total withdraw 
    const totalWithdraw = currentWithdrawAmount + newWithdrawAmount;
    currentWithdraw.innerText = totalWithdraw;
    newWithdraw.value = '';

    const currentBalance = document.getElementById('current-balance');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    
    const totalBalance = currentBalanceAmount - newWithdrawAmount;
    currentBalance.innerText = totalBalance;
})




