<<<<<<< HEAD
class Income extends Data{
    static counterIncomes = 0

    constructor(description, value){
        super(description, value)
        this._id = ++Income.counterIncomes
    }
    get id(){
        return this._id
    }
=======
class Income extends Data{
    static counterIncomes = 0

    constructor(description, value){
        super(description, value)
        this._id = ++Income.counterIncomes
    }
    get id(){
        return this._id
    }
>>>>>>> d32d92745b4f2860f82359058b97db3892b5c065
}