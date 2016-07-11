const path = require('path');
require('babel-register');
const express = require('express');
const React = require('react');
const ReactDOM = require('react-dom/server');
const compression = require('compression');
const pageComponent = require('./components/page').default;
const settings = require('../data/settings');

const app = express();
const createPage = React.createFactory(pageComponent);

app.locals.env = app.settings.env;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compression());
app.use('/', express.static('public'));
app.get('/', (req, res) => res.render('index', {
  markup: ReactDOM.renderToString(createPage(settings.page))
}));

app.listen(process.env.PORT || 3000);
