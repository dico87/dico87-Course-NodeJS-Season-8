require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to season 8 api");
});

app.get('/users', (req, res) => {
    res.json({
        message: "Get all users"
    });
});

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id,
        message: "Get user by id"
    });
});

app.post('/users', (req, res) => {
    let body = req.body;
    if(body.name) {
        res.json({
            body,
            message: "Create new user"
        });
    } else {
        res.status(400).json({
            message: "Name property is required"
        });
    }
});

app.put('/users/:id', (req, res) => {
    let body = req.body;
    res.json({
        body,
        message: "Update user by id"
    });
});

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id,
        message: "Delete user by id"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Start Express Server in port ${process.env.PORT}`);
});