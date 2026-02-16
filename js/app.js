const incomes = [
    new Income("Salary", 2100),
    new Income("Classes", 250),
]

const expenses = [
    new Expense("Home Rent", 450),
    new Expense("Supermarcket", 200)
]

let loadApp = () => {
    loadHeader()
    loadIncomes()
    loadExpenses()
}
let totalIncomes = () => {
    let totalIncome = 0
    for (let income of incomes) {
        totalIncome += income.value
    }
    return totalIncome
}
let totalExpenses = () => {
    let totalExpense = 0
    for (let expense of expenses) {
        totalExpense += expense.value
    }
    return totalExpense
}
let loadHeader = () => {
    let budget = totalIncomes() - totalExpenses()
    let expensePercentage = totalExpenses() / totalIncomes()
    document.getElementById("budget").innerHTML = currencyFormat(budget)
    document.getElementById("percentage").innerHTML = percentageFormat(expensePercentage)
    document.getElementById("incomes").innerHTML = currencyFormat(totalIncomes())
    document.getElementById("expenses").innerHTML = currencyFormat(totalExpenses())
}

const currencyFormat = (value) => {
    return value.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 2 })
}
const percentageFormat = (value) => {
    return value.toLocaleString("en-US", { style: "percent", minimumFractionDigits: 2 })
}

const loadIncomes = () => {
    let incomesHTML = ''
    for (let income of incomes) {
        incomesHTML += createIncomesHTML(income)
    }
    document.getElementById("incomes-list").innerHTML = incomesHTML
}

const createIncomesHTML = (income) => {
    let incomeHTML = `
        <div class="element clearStyles">
            <div class="element_description">${income.description}</div>
                <div class="right clearStyles">
                    <div class="element_value">${currencyFormat(income.value)}</div>
                        <div class="element_delete">
                            <button class="element_delete--btn">
                                <ion-icon name="close-circle-outline"
                                onclick='deleteIncome(${income.id})'></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    

    `
    return incomeHTML
}

const deleteIncome = (id) => {
    let indiceDelete = incomes.findIndex(income => income.id === id )
    incomes.splice(indiceDelete, 1)
    loadHeader()
    loadIncomes()
}

const loadExpenses = () => {
    let expensesHTML = ''
    for (let expense of expenses) {
        expensesHTML += createExpenseHTML(expense)
    }
    document.getElementById("expenses-list").innerHTML = expensesHTML
}

const createExpenseHTML = (expense) => {
    let expenseHTML = `
        <div class="element clearStyles">
            <div class="element_description">${expense.description}</div>
                <div class="right clearStyles">
                    <div class="element_value">${currencyFormat(expense.value)}</div>
                    <div class="element_percentage">${percentageFormat(expense.value/totalExpenses())}</div>
                        <div class="element_delete">
                            <button class="element_delete--btn">
                                <ion-icon name="close-circle-outline"
                                onclick = deleteExpense(${expense.id})></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    `
    return expenseHTML
}

const deleteExpense = (id) => {
    let indiceDelete = expenses.findIndex(expense => expense.id === id)
    expenses.splice(indiceDelete, 1)
    loadHeader()
    loadExpenses()
}


let addData = () => {
    let forma = document.forms['forma']
    let type = forma['type']
    let desctiption = forma['description']
    let value = forma['value']
    if (desctiption.value !== '' && value.value !== ''){
        if (type.value === 'income'){
            incomes.push(new Income(description.value, Number(value.value)))
            loadHeader()
            loadIncomes()
        }
        else if(type.value === 'expense'){
            expenses.push(new Expense(description.value, Number(value.value)))
            loadHeader()
            loadExpenses()

        }
    }
}
