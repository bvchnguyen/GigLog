const { addEarnings, getEarnings, deleteEarnings } = require('../controllers/earning');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');

const router = require('express').Router();

router.post('/add-earning', addEarnings)
        .get('/get-earning', getEarnings)
        .delete('/delete-earning/:id', deleteEarnings)
        .post('/add-expense', addExpense)
        .get('/get-expense', getExpense)
        .delete('/delete-expense/:id', deleteExpense)
module.exports = router