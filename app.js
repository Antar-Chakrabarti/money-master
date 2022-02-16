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
    if (totalExp > 0) {
        totalExp.innerText = foodExpAmount + rentExpAmount + clothExpAmount;
    }
    const totalExpAmount = parseInt(totalExp.innerText);
    // update balance
    const balance = document.getElementById('balance-total');
    if (totalExpAmount > 0) {
        balance.innerText = incomeTotalAmount - totalExpAmount;
    }
});