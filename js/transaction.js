document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // console.log(newdepositAmount);

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    //update account balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositTotal);
    balanceTotal.innerText = newBalanceTotal;
    //clear the deposit input field
    depositInput.value = '';

    
});

//withdraw eventlistener
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

       //arithmetic work

        const withdrawTotal = document.getElementById('withdraw-total');

        const previousWithdrawAmount = withdrawTotal.innerText;
        const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
        withdrawTotal.innerText = newWithdrawTotal;

        //update account balance after withdraw

        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceTotal = balanceTotal.innerText;
        const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawTotal);
        balanceTotal.innerText = newBalanceTotal;
    
        //clear the withdraw input field
    withdrawInput.value = '';
});