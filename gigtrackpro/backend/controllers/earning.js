const EarningsSchema = require("../models/EarningsModel");

exports.addEarnings = async (req, res) => {
    const { amount, trip, category, description, date, startingMi, endingMi } = req.body
    const earnings = EarningsSchema({
        amount,
        trip,
        category,
        date,
        startingMi,
        endingMi
    })

    try{
        // Input validation, check for empty inputs
        if (amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be positive.'})
        }
        if (!trip || !category || !date){
            return res.status(400).json({message: 'All fields required.'})
        }
        await earnings.save()
        res.status(200).json({message: 'Earnings added.'})
    }
    catch (error){
        res.status(500).json({message: 'Server Error.'})
    }
}
exports.getEarnings = async (req, res) => {
    try{
        const incomes = await EarningsSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    }
    catch (error){
        res.status(500).json({message: 'Get Earnings Server Error.'})
    }
}
exports.deleteEarnings = async (req, res) => {
    const { id } = req.params;
    EarningsSchema.findByIdAndDelete(id).then((income) =>{
        res.status(200).json({message: 'Earnings Deleted.'})

    }).catch((err) => {
        res.status(500).json({message: 'Delete Earnings Server Error.'})
    })
}