const express = require('express');
const generalRouter = require('./general.routes');

function routerApi(app) {
    const router = express.Router();
    app.use(router);
    router.use('/', generalRouter);
}

module.exports = routerApi;