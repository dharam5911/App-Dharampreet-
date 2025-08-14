
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let budget = parseFloat(localStorage.getItem('budget')) || 0;

function addExpense() {
    const name = document.getElementById('expense-name')?.value;
    const amount = parseFloat(document.getElementById('expense-amount')?.value);
    const date = document.getElementById('expense-date')?.value;
    if(name && !isNaN(amount) && date) {
        expenses.push({name, amount, date});
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
        updateDashboard();
    }
}

function renderExpenses() {
    const list = document.getElementById('expense-list');
    if(!list) return;
    list.innerHTML = '';
    expenses.forEach((e,i) => {
        const li = document.createElement('li');
        li.textContent = e.date + ' - ' + e.name + ': $' + e.amount.toFixed(2);
        list.appendChild(li);
    });
}

function setBudget() {
    const value = parseFloat(document.getElementById('set-budget').value);
    if(!isNaN(value)) {
        budget = value;
        localStorage.setItem('budget', budget);
        updateDashboard();
        alert('Budget set to $' + budget);
    }
}

function updateDashboard() {
    const total = expenses.reduce((sum,e)=>sum+e.amount,0);
    const totalEl = document.getElementById('total-expense');
    const budgetEl = document.getElementById('budget');
    if(totalEl) totalEl.textContent = total.toFixed(2);
    if(budgetEl) budgetEl.textContent = budget.toFixed(2);
}

function handlePDF() {
    const input = document.getElementById('pdf-upload');
    const list = document.getElementById('pdf-list');
    if(input && input.files.length > 0 && list) {
        const file = input.files[0];
        const li = document.createElement('li');
        li.textContent = file.name;
        list.appendChild(li);
    }
}

document.getElementById('pdf-upload')?.addEventListener('change', handlePDF);
renderExpenses();
updateDashboard();
