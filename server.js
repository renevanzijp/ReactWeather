/**
 * Created by rene on 25-11-16.
 */
var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log("Express server is up on port 3000");
});
