const mongoose = require('mongoose');

const EarningsSchema = new mongoose.Schema({
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
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
        trim: false
    },
    startingMi: {
        type: Number,
        require: false,
        trim: true
    },
    endingMi: {
        type: Number,
        require: false,
        trim: true
    },
    totalMi: {
        type: Number,
        require: false,
        trim: true
    },
}, {timestamps: true})

EarningsSchema.pre('save', async function(next){
    if(this.startingMi !== undefined && this.endingMi !== undefined){
        this.totalMi = this.endingMi - this.startingMi;
    }
    next(); 
})

module.exports = mongoose.model('Earnings', EarningsSchema)