var express = require('express'),
    app = express(),
    bodyParser=require('body-parser');
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(7000);