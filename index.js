const express = require('express');
const app = express();
require("dotenv").config();
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

app.post('/users', async function (req, res) {
    try {
        const result = await knex('users').insert(req.body);
        res.json({ message: 'Record inserted', result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/users', async function (req, res) {
    try {
        const rows = await knex('mytable').select('*');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/users/:id', async function (req, res) {
    try {
        const result = await knex('mytable').where({ id: req.params.id });
        res.json({ message: 'Record Fetched', result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/users/:id', async function (req, res) {
    try {
        const result = await knex('mytable').where({ id: req.params.id }).update(req.body);
        res.json({ message: 'Record updated', result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/users/:id', async function (req, res) {
    try {
        const result = await knex('mytable').where({ id: req.params.id }).del();
        res.json({ message: 'Record deleted', result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(4000, function () {
    console.log('Server started on port 4000');
});