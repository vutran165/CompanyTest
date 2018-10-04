const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname, 'dist/company-app-bachtuvu'));

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
    res.sendFile(path.join(__dirname, 'dist/company-app-bachtuvu/index.html'));
})
console.log('Running');

