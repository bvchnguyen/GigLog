const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number, 
        required: true,
        trim: true,
        maxLength: 20
    },
    date: {
        type: Date,
        required: true,
    },
    category: {
        type: String, 
        required: true,
        trim: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)