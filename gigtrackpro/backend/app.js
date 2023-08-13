const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const passport = require('passport');
const app = express();
// const passportJWT = require('./controllers/passport');

require('dotenv').config();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors({}))
app.use(passport.initialize());
// passportJWT(passport);
require('./controllers/passport')(passport);
app.set('view engine', 'ejs');

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Listening to port: ', PORT)
    })
};
app.get('/', (req, res)=> {
    res.send('Backend is connected and running...')
})

// Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));

server();