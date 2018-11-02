const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/CompanyTest'));

// body parse
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json({ extended: true }));

// Start the app by listening on the default Heroku port
var port = process.env.PORT || 8888;
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('server started port: ${port}');
    }
});

app.get('*', function (req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname + '/dist/CompanyTest/index.html'));
})
console.log('Running');

