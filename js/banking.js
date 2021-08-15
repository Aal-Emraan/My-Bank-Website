// ---------- deposite area -----------------

document.getElementById('depositeButton').addEventListener('click',function(){
    // get input value 
    const inputAmountField = document.getElementById('deposite-amount');
    const inputAmount = parseFloat(inputAmountField.value);

    // get previous value 
    const previousAmountField = document.getElementById('deposite');
    const previousAmount = parseFloat(previousAmountField.innerText);

    // show output 
    const totalDeposite = inputAmount + previousAmount;
    document.getElementById('deposite').innerText = totalDeposite;
    inputAmountField.value = '';

    //  show total balance after deposite
    const previousTotal = parseFloat(document.getElementById('balance').innerText);
    document.getElementById('balance').innerText = previousTotal + inputAmount;
})

// ----------- withdraw area ----------------

document.getElementById('withdrawButton').addEventListener('click', function(){
    // get input withdraw value 
    const inputWithdrawField = document.getElementById('withdraw-amount');
    const inputWithdrew = parseFloat(inputWithdrawField.value);

    // get previous withdraw amount 
     const previousWithdrawField = document.getElementById('withdraw');
    const previosWithdraw = parseFloat(previousWithdrawField.innerText);

    // show total withdraw
    const totalWithdraw = previosWithdraw + inputWithdrew;
    

    // show total balance after withdraw
    const previousTotal = parseFloat(document.getElementById('balance').innerText);
    

    // validation
    if(inputWithdrew > previousTotal){
        window.alert('you cannot withdraw much than your total balance.');
        inputWithdrawField.value = '';
    }else{
        document.getElementById('withdraw').innerText = totalWithdraw;
        inputWithdrawField.value = '';
        document.getElementById('balance').innerText = previousTotal - inputWithdrew;
    }
})