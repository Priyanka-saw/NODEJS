const http = require('http');
const fs = require('fs');



// creating server 
const myServer = http.createServer((req, res) => {

    const log = `${Date.now()}: ${req.url} New Request Recevied\n`;

    fs.appendFile('log.txt', log, (err, data) => {

        switch (req.url) {
            case '/':
                res.end("HomePage");
                break;
            case '/about': res.end("Iam Priyanka")
            default:
                res.end("404 not found")

        }
        // res.end('hello from server again')
    });

    // console.log('New req rec.')
    // console.log(req);


    // res.end('hello from server')
});

myServer.listen(8000, () => {
    console.log('server started')
})