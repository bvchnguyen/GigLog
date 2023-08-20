const express = require('express');
const cors = require('cors');
const passport = require('passport');
const app = express();
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const path = require('path'); 

require('dotenv').config();
const PORT = process.env.PORT;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({}))
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));
require('./controllers/passport')(passport);


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Listening to port: ', PORT)
    })
};
app.get('/', (req, res)=> {
    res.render('home', {
        local_css: "home.css",
    });
})

// Routes
readdirSync('./routes').map((route) => app.use('/', require('./routes/' + route)));

server();