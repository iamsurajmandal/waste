var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.get('/', (req, res ,next) =>{
res.send('E');
});

app.get('/form', (req, res, next) => {
res.render('index');
});

app.listen(3000, 'localhost', () => {console.log("server started")});
