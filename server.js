
const gconf = require('gconf/default');
const logger = require('morgan');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const errorhandler = require('errorhandler');

const app = module.exports = express();

app.use(helmet());
app.use(logger(gconf.get('logger.format')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/config', (req, res) => res.send(gconf.get()));

app.use(errorhandler());
