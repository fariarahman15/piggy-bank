// input function 
function getInputAmount(inputAmount){
    const newInput = document.getElementById(inputAmount);
    const newInputText = newInput.value;
    const newInputAmount = parseFloat(newInputText);
    newInput.value = '';
    return newInputAmount;
}

function updateTotal(totalFieldId, newAmount){
    const currentAmount = document.getElementById(totalFieldId);
    const currentAmountText = currentAmount.innerText;
    const currentAvailableAmount = parseFloat(currentAmountText);
    // update total
    const totalAmount = currentAvailableAmount + newAmount;
    currentAmount.innerText = totalAmount;
    return totalAmount;
}


function balanceUpdate(updatedAmount, amountAdded){
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);

    if (amountAdded == true){
        const totalBalance = currentBalanceAmount + updatedAmount;
        currentBalance.innerText = totalBalance;
    }
    else{
        const totalBalance = currentBalanceAmount - updatedAmount;
        currentBalance.innerText = totalBalance;
    }
}


/* --------------------*******-------------------- */


// deposit submit 
document.getElementById('deposit-submit').addEventListener('click', function(){

    // new deposit amount 
    const newDepositAmount = getInputAmount('new-deposit');

    // update deposit amount
    const updatedDeposit = updateTotal('current-deposit', newDepositAmount);
    
    // update balance after deposit
    const updatedBalance = balanceUpdate(newDepositAmount, true);

})



/* --------------------*******-------------------- */



// withdraw submit 
document.getElementById('withdraw-submit').addEventListener('click', function(){
    

    // new withdraw amount 
    const newWithdrawAmount = getInputAmount('new-withdraw');

    // update withdraw amount
    const updatedWithdraw = updateTotal('current-withdraw', newWithdrawAmount);

     // update balance after deposit
     const updatedBalance = balanceUpdate(newWithdrawAmount, false);

})




