const http = require('http');
const fs = require('fs');

const myserver = http.createServer((req,res) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFile('server.log', log, (err,data) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }

        switch (req.url) {
            case '/':
                res.end('Welcome to the Home Page');
                break;
            case '/about':
                res.end('About Us');
                break;
            default:
                res.end('Page Not Found');
        }
    });
    // console.log(req.headers)
    // res.end('Hello World');
});
console.log("Hiii")

myserver.listen(3000, () => {
    console.log('Server is listening on port 3000');
});