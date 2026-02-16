<<<<<<< HEAD
class Expense extends Data{
    static counterExpenses = 0

    constructor(description, value){
        super(description, value)
        this._id = ++Expense.counterExpenses
    }
    get id(){
        return this._id
    }
=======
class Expense extends Data{
    static counterExpenses = 0

    constructor(description, value){
        super(description, value)
        this._id = ++Expense.counterExpenses
    }
    get id(){
        return this._id
    }
>>>>>>> d32d92745b4f2860f82359058b97db3892b5c065
}