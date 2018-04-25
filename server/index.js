'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
const DB = require('./modules/Database');
const helper = require('./utils/helper');
const cors = require('cors');

const core = require('./method');

// Register Method
const userMethod = require('./method/user');
const productMethod = require('./method/product');

// core.registerMethod(app);


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(cors({
   origin: 'http://localhost:8080',
   credentials: true
}));

app.use('/user', userMethod);
app.use('/product', productMethod);



app.post('/new', (req, res, next) => {

});

app.get('/edit', function(req, res, next) {

});

app.listen(PORT, () => {
   console.log(`running on ${PORT}`);
});
