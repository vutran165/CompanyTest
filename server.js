const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const cors = require('cors');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/CompanyTest'));

//CORS middleware
app.use(function (req, res, next) {
    //enabling CORS
    // req.header("Access-Control-Request-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // req.header("Access-Control-Request-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");


    res.header("Access-Control-Allow-Origin", "http://localhost:8585");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true)
    next();
})

//using cors external module
// app.use(cors({
//     origin: 'http://localhost:8585',
//     exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
//     methods: ['GET', 'PUT', 'POST', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     preflightContinue: false,
//     credentials: true
// }));

// body parse
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json({ extended: true }));

//handle 404
// app.use(function (req, res) {
//     res.status(404).send({
//         status: 404,
//         message: 'Not found',
//         type: 'client'
//     });
// })

// handle 500
// app.use(function (req, res) {
//     res.status(500).send({
//         status: 500,
//         message: 'internal error',
//         type: 'internal'
//     })
// })


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
    res.sendFile(path.join(__dirname + '/dist/CompanyTest/index.html'));
})
console.log('Running');

