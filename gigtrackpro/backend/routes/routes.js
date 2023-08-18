const { addEarnings, getEarnings, deleteEarnings } = require('../controllers/earning');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { registerUser, loginUser, getProfileData } = require('../controllers/authenticate');
const { performAggregation } = require('../db/aggregation');

const passport = require('passport');
const router = require('express').Router();

router.post('/signup', registerUser)
        .get('/signup', (req, res) =>{
            res.render('pages/signup');
        })
        .post('/login', loginUser)
        .get('/login', (req, res) =>{
            res.render('pages/login');
        })
        .get('/getProfile', passport.authenticate('jwt', { session: false }), getProfileData) 
        .post('/add-earning', addEarnings)
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