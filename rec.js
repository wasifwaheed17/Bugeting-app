let monBudget = 0;

function addBudget(event) {
    event.preventDefault();
    const budgetInput = document.getElementById("mbudget");
    monBudget = parseInt(budgetInput.value);
    budgetInput.value = ''; // Clearing the input field
    console.log(monBudget);
    t();
}

const exp = [];
function addExpenses(event) {
    event.preventDefault();
    const descri = document.getElementById("Desc");
    const dueDate = document.getElementById("Ddate");
    const payDate = document.getElementById("Pdate");
    const categ = document.getElementById("ctgr");
    const tamoun = document.getElementById("tamount");
    const expn = {
        Desc: descri.value,
        Ddate: dueDate.value,
        Pdate: payDate.value,
        ctgr: categ.value,
        tamount: parseInt(tamoun.value),
    };
    exp.push(expn);
    console.log(exp);
    descri.value = '';
    dueDate.value = '';
    payDate.value = '';
    categ.value = '';
    tamoun.value = '';
    displayExpenses();
    crbudget();
    b();
    e();
}

function displayExpenses() {
    const expenseTable = document.getElementById('expenseslist');
    const tbody = expenseTable.querySelector('tbody');
    tbody.innerHTML = ''; // Clearing existing table data
  
    exp.forEach((expn) => {
      const row = document.createElement('tr');
      const ddateCell = document.createElement('td');
      const tamCell = document.createElement('td');
      const catgCell = document.createElement('td');
      const dCell = document.createElement('td');
      const pdateCell = document.createElement('td');
  
      ddateCell.textContent = expn.Ddate;
      tamCell.textContent = expn.tamount;
      catgCell.textContent = expn.ctgr;
      dCell.textContent = expn.Desc;
      pdateCell.textContent = expn.Pdate;
  
      row.appendChild(ddateCell);
      row.appendChild(tamCell);
      row.appendChild(catgCell);
      row.appendChild(dCell);
      row.appendChild(pdateCell);
      tbody.appendChild(row);
    });
  }
  
// function generateTableRows() {
//     const tableBody = document.getElementById('expensesTableBody');
  
//     // Clear existing rows
//     tableBody.innerHTML = '';
  
//     // Generate rows based on the expenses data
//     exp.forEach((expn) => {
//       const row = document.createElement('tr');
  
//       // Create cells for each property of the expense object
//       const descriptionCell = document.createElement('td');
//       descriptionCell.textContent =expn.Ddate;
  
//       const amountCell = document.createElement('td');
//       amountCell.textContent = expn.Desc;
  
//       const dateCell = document.createElement('td');
//       dateCell.textContent = expn.Pdate;
  
//       // Append cells to the row
//       row.appendChild(descriptionCell);
//       row.appendChild(amountCell);
//       row.appendChild(dateCell);
  
//       // Append row to the table body
//       tableBody.appendChild(row);
//     });
//   }
  
  // Call the function to generate the table rows
 // generateTableRows();
  function crbudget() {
    const texpn = exp.reduce((total,expn) => total + expn.tamount,0);
    const rBudget = monBudget - texpn;
    console.log("Remaining Budget:",rBudget);
    return rBudget;
    
  }
//   const remainingBudget = crbudget();
//   console.log("Remaining Budget:", remainingBudget);

// function overviewds() {
//   const expenseTable = document.getElementById('ods');
//   const tbody = expenseTable.querySelector('tbody');
//   tbody.innerHTML = ''; // Clearing existing table data
// }

function t (){
  let g = document.getElementById("tb")
  g.textContent = monBudget;
}

function b (){
  let bud = crbudget();
  let b = document.getElementById("balance")
  b.textContent = bud;
}
function e (){
  let ex = crbudget();
  let nesw =  monBudget - ex;
  let nes = document.getElementById("expenses")
  nes.textContent =nesw ;
}