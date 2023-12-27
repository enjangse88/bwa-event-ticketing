const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const categoriesRouter = require('./app/api/v1/categories/router');
const imagesRouter = require('./app/api/v1/images/router');
const talentsRouter = require('./app/api/v1/talents/router');
const handleErrorMiddleware = require('./app/middlewares/handler-error');
const notFoundMiddleware = require('./app/middlewares/not-found');

const v1 = '/api/v1/cms';
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Event ticket online API"
    });
});
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use(v1, categoriesRouter);
app.use(v1, imagesRouter);
app.use(v1, talentsRouter);
//app.use(v1, categoriesTalent);

app.use(handleErrorMiddleware);
app.use(notFoundMiddleware);


module.exports = app;
