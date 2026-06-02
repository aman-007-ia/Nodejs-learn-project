const http = require('http');
const fs = require('fs');
const url = require('url');

const myserver = http.createServer((req,res) => {
    if(req.url === '/favicon.ico') return res.end();  
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile('server.log', log, (err,data) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }

        switch (myUrl.pathname) {
            case '/':
                if(req.method === 'GET') {
                    res.end('Welcome to the Home Page');
                }
                break;
            case '/about':
                const username = myUrl.query.myname || 'Guest';
                res.end(`Welcome to the About Page, ${username}!`);
                break;
            case '/search':
                const searchTerm = myUrl.query.q || 'Nothing';
                res.end(`You searched for: ${searchTerm}`);
                break;
            case '/singup':
                if(req.method === 'POST') {
                    res.end('Signup successful!');
                } else {
                    res.end('Signup page');
                }
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