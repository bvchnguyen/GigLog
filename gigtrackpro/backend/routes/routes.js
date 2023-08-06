const { addEarnings, getEarnings, deleteEarnings } = require('../controllers/earning');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { performAggregation } = require('../db/aggregation');

const router = require('express').Router();

router.post('/add-earning', addEarnings)
        .get('/get-earning', getEarnings)
        .delete('/delete-earning/:id', deleteEarnings)
        .post('/add-expense', addExpense)
        .get('/get-expense', getExpense)
        .delete('/delete-expense/:id', deleteExpense)
        .get('/aggregateData', async (req, res) =>{
            try{
                const aggregateDatata = await performAggregation();
                res.json(aggregateDatata);
            } catch (error) {
                console.error('Error performing DB aggregation: ', error);
                res.status(500).json({ message: 'Error performing aggregation' });
            }
        });
module.exports = router;