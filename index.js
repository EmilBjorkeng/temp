const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/index.html");
})

var server = app.listen(8081, function () {
    var port = server.address().port;
    console.log("Server listening at port %s", port);
})
