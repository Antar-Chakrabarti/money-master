function getInputValue(inputId) {
    const inputTotal = document.getElementById(inputId + '-total');
    const inputTotalText = inputTotal.value;
    const inputTotalAmount = parseInt(inputTotalText);
    return inputTotalAmount;
}
// calculate button
document.getElementById('calculating-btn').addEventListener('click', () => {
    // income total
    const incomeTotalAmount = getInputValue('income');
    if (incomeTotalAmount < 0 || isNaN(incomeTotalAmount)) {
        alert('income should be posative Number');
        return '';
    }
    // Food expense
    const foodExpAmount = getInputValue('foodexp');
    if (foodExpAmount < 0 || isNaN(foodExpAmount)) {
        alert('Food cost should be posative Number');
        return '';
    }
    // Rent expense
    const rentExpAmount = getInputValue('rentexp');
    if (rentExpAmount < 0 || isNaN(rentExpAmount)) {
        alert('Rent cost should be posative Number');
        return '';
    }
    // Clothes expense
    const clothExpAmount = getInputValue('clothexp');
    if (clothExpAmount < 0 || isNaN(clothExpAmount)) {
        alert('Clothes cost should be posative Number');
        return '';
    }
    // total expense
    const totalExp = document.getElementById('expense-total');

    totalExp.innerText = foodExpAmount + rentExpAmount + clothExpAmount;
    const totalExpAmount = parseInt(totalExp.innerText);
    // update balance
    const balance = document.getElementById('balance-total');
    balance.innerText = incomeTotalAmount - totalExpAmount;
});

// save button
document.getElementById('save-button').addEventListener('click', (e) => {
    // total income
    const incomeTotalAmount = getInputValue('income');
    if (incomeTotalAmount < 0) {
        alert('Income should be posative Number');
        return '';
    }
    // Total Expenses
    const totalExpense = document.getElementById('expense-total');
    const totalExpenseText = totalExpense.innerText;
    const totalExpenseAmount = parseInt(totalExpenseText);
    console.log(totalExpenseAmount);
    // Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseInt(balanceTotalText);
    console.log(balanceTotalAmount);
    // parcentage 
    const parcentTotal = document.getElementById('parcent-total');
    const parcentTotalText = parcentTotal.value;
    const parcentTotalAmount = parseInt(parcentTotalText);
    console.log(parcentTotalAmount);
    // saving Amount
    const saving = document.getElementById('saved-amount');
    const savingText = saving.innerText;
    const savingAmount = parseInt(savingText);


    // Remaining Balance
    const remaining = document.getElementById('remaining-balance');
    const remainingText = remaining.innerText;
    const remainingBalance = parseInt(remainingText);

    // calculation saving amount
    const savingBalanceAmount = Math.ceil((incomeTotalAmount / 100) * parcentTotalAmount);
    saving.innerText = savingBalanceAmount;
    // update remaining balance
    const NetRemainingBalance = Math.ceil(balanceTotalAmount - savingBalanceAmount);
    //console.log(remainingBalance);
    remaining.innerText = NetRemainingBalance;
});