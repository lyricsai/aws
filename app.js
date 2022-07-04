const sls = require('serverless-http');
const express = require('express');
const handler = require('./handler');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/info', (req, res) => {
    res.send({application: 'sample-app', version: '1.0'});
});
app.post('/random', (req, res) => {
    res.send({...req.body});
});
app.listen(3000, () => console.log(`Listening on: 3000`));

module.exports.app = sls(app);