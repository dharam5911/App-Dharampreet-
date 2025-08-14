
let expenses = [];
function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    if(name && !isNaN(amount)) {
        expenses.push({name, amount});
        renderExpenses();
    }
}
function renderExpenses() {
    const list = document.getElementById('expense-list');
    list.innerHTML = '';
    expenses.forEach((e, i) => {
        const li = document.createElement('li');
        li.textContent = e.name + ': $' + e.amount.toFixed(2);
        list.appendChild(li);
    });
}
