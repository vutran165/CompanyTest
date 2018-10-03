const express = require('express');
const path = require('path');
const http = require('http');

const app = express();


// Serve only the static files form the dist directory

app.use(express.static(__dirname + '/dist/CompanyTest'));

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8888;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('Server is running!!!'));
// app.listen(process.env.PORT || 8888);

server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/CompanyTest/index.html'))
})

