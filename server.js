/**
 * Created by rene on 25-11-16.
 */
var express = require('express');

var app = express();
const  port = process.env.PORT || 3000;

app.use(function (req, res, next) {
        if (req.headers["x-forwarded-proto"] === 'http') {
            next();
        } else {
            res.redirect("http://" + req.hostname + req.url);
        }
    }
);
app.use(express.static('public'));

app.listen(port, function () {
    console.log("Express server is up on port " + port);
});
