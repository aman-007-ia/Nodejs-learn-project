const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
    res.send(`Welcome to the About Page ${req.query.name || 'Guest'}`);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// const myserver = http.createServer(app);
// console.log("Hiii")

// myserver.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });
