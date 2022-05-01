const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/index.html");
})

app.post('/webhook', function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
})

var server = app.listen(8080, function () {
    var port = server.address().port;
    console.log("Server listening at port %s", port);
})
