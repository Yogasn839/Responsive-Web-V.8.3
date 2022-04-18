require('dotenv').config();

const express = require('express');

const route = require('./route');

const errorMiddleware = require('./middleware/error');

const notFoundMiddleware = require('./middleware/notfound');

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(route);

app.use(errorMiddleware.error);
app.use(notFoundMiddleware.notFound);

app.listen(port);