const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/index.html");
})

app.get('/test', function (req, res) {
   res.sendFile(__dirname + "/index.html");
})


app.post('/webhook', function(req, res) {
    res.sendStatus(200);
    if (req.body.ref == "refs/heads/main") {
        process.kill(process.pid, 'SIGTERM');
    }
})

var server = app.listen(8080, function () {
    var port = server.address().port;
    console.log("Server listening at port %s", port);
})
