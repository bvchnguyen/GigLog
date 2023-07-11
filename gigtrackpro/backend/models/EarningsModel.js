const mongoose = require('mongoose');

const EarningsSchema = new mongoose.Schema({
    amount: {
        type: Number, 
        required: true,
        trim: true,
        maxLength: 20
    },
    trip:{
        type: Number,
        required: true,
        trim: true,
        maxLength: 3
    },
    type: {
        type: String, 
        default: "Earning"
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

module.exports = mongoose.model('Earnings', EarningsSchema)