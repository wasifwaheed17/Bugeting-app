let monBudget = 0;

function addBudget(event) {
    event.preventDefault();
    const budgetInput = document.getElementById("mbudget");
    if(budgetInput.value === ""){
        alert("please fill the feild")
    }
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
    if(descri.value==="" || dueDate.value ==="" || payDate.value===""||categ.value==="" ||tamoun.value===""){
      alert("please fill the feild");
      return;
    }
    // if(isNaN(tamoun)){
    //   //console.error("error");

    // }
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

  exp.forEach((expn, index) => {
    const row = document.createElement('tr');
    const ddateCell = document.createElement('td');
    const tamCell = document.createElement('td');
    const catgCell = document.createElement('td');
    const dCell = document.createElement('td');
    const pdateCell = document.createElement('td');
    const actionCell = document.createElement('td'); // New cell for action buttons

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

    
    const editButton = document.createElement('img');
    editButton.src = "./resources/icons8-edit-30.png";
    editButton.addEventListener('click', () => editExpense(index));

    const deleteImage = document.createElement('img');
    deleteImage.src = "./resources/icons8-delete-24.png";
    deleteImage.addEventListener('click', () => deleteExpense(index));

    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteImage);

    row.appendChild(actionCell);
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

function editExpense(index) {
  const expn = exp[index];


  const descri = document.getElementById("Desc");
  const dueDate = document.getElementById("Ddate");
  const payDate = document.getElementById("Pdate");
  const categ = document.getElementById("ctgr");
  const tamoun = document.getElementById("tamount");

  descri.value = expn.Desc;
  dueDate.value = expn.Ddate;
  payDate.value = expn.Pdate;
  categ.value = expn.ctgr;
  tamoun.value = expn.tamount;

  
  exp.splice(index, 1);

  
  displayExpenses();
  crbudget();
}


function deleteExpense(index) {
  
  exp.splice(index, 1);

  
  displayExpenses();
  crbudget();
}
