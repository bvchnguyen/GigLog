const { addEarnings, getEarnings, deleteEarnings } = require('../controllers/earning');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { registerUser, loginUser, getProfileData, logoutUser } = require('../controllers/authenticate');
const { performAggregation } = require('../db/aggregation');

const passport = require('passport');
const router = require('express').Router();

router.post('/signup', registerUser)
        .get('/signup', (req, res) =>{
            res.send('<h1>Signup Successful</h1>')
        })
        .post('/login', loginUser)
        .get('/login', (req, res) =>{
            res.send('<h1>Login Successful</h1>')
        })
        .post("/logout", (req, res, next) => {
            res.cookie("jwt", "", { expires: new Date(0) });
            req.logout(function (err) {
                if (err) {
                    return next(err);
                }
                console.log("Logged out");
                res.redirect("http://localhost:3001/login");
            });
        })
        .get('/protected-route', passport.authenticate('jwt', { session: false }), (req, res) => {
            res.json({ message: 'You have access to this protected route!' });
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