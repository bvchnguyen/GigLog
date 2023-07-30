const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
    const { amount, category, date } = req.body
    const expense = ExpenseSchema({
        amount,
        date,
        category
    })

    try{
        // Input validation, check for empty inputs
        if (!amount || !category || !date){
            return res.status(400).json({message: 'All Expense fields required.'})
        }
        if (amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be positive.'})
        }
        await expense.save()
        res.status(200).json({message: 'Expense added.'})
    }
    catch(error){
        res.status(500).json({message: 'Add Expense Server Error.'})
    }

    console.log(expense)
}
exports.getExpense = async (req, res) => {
    try{
        const expense = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expense)
    }
    catch (error){
        res.status(500).json({message: 'Get expense Server Error.'})
    }
}
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id).then((expense) =>{
        res.status(200).json({message: 'Expense Deleted.'})

    }).catch((err) => {
        res.status(500).json({message: 'Delete Expense Server Error.'})
    })
}