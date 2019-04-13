const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(__dirname + '/../public/'));

app.use('/reviews/*', (req, res) => {
    axios[req.method.toLowerCase()](`http://ec2-54-212-20-135.us-west-2.compute.amazonaws.com:3001${req.originalUrl}`)
    .then(({data}) => res.send(data))
    .catch(err => res.statusCode(500).send(err))
});

app.use('/product/*', (req, res) => {
    axios[req.method.toLowerCase()](`http://ec2-54-184-68-134.us-west-2.compute.amazonaws.com:3002${req.originalUrl}`)
    .then(({data}) => res.send(data))
    .catch(err => res.statusCode(500).send(err))
});

app.use('*', express.static(__dirname + '/../public/index.html'));

let port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port: ${port}`));