const express = require('express');
const jade = require('jade');
const reactDOM = require('react-dom/server');
const app = express();

app.engine('jade', jade.__express);
app.set('view engine', 'jade');

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000);
