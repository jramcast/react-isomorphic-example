const path = require('path');
require('babel-register');
const express = require('express');
const React = require('react');
const ReactDOM = require('react-dom/server');
const pageComponent = require('./components/page').default;
const app = express();
const createPage = React.createFactory(pageComponent);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', express.static('public'));
app.get('/', (req, res) => res.render('index', {
  react: ReactDOM.renderToString(createPage())
}));

app.listen(process.env.PORT || 3000);
