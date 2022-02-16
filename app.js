function getInputValue(inputId) {
    const inputTotal = document.getElementById(inputId + '-total');
    const inputTotalText = inputTotal.value;
    const inputTotalAmount = parseInt(inputTotalText);
    return inputTotalAmount;
}
document.getElementById('calculating-btn').addEventListener('click', () => {
    // income total
    const incomeTotalAmount = getInputValue('income');
    // Food expense
    const foodExpAmount = getInputValue('foodexp');
    // Rent expense
    const rentExpAmount = getInputValue('rentexp')
        // Clothes expense
    const clothExpAmount = getInputValue('clothexp');
    // total expense
    const totalExp = document.getElementById('expense-total');
    if (foodExpAmount > 0 && rentExpAmount > 0 && clothExpAmount > 0) {
        totalExp.innerText = foodExpAmount + rentExpAmount + clothExpAmount;
    }
    const totalExpAmount = parseInt(totalExp.innerText);
    // update balance
    const balance = document.getElementById('balance-total');
    if (totalExpAmount > 0) {
        balance.innerText = incomeTotalAmount - totalExpAmount;
    }
});
document.getElementById('save-button').addEventListener('click', () => {
    const parcent = getInputValue('parcent');
    const incomeTotalAmount = getInputValue('income');
    // find parcent
    const findOutPercent = (incomeTotalAmount / 100) * parcent;
    // update  parcent
    const saveMoney = document.getElementById('saved-amount');
    saveMoney.innerText = findOutPercent;
});