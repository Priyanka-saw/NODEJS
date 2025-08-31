const http = require('http');
const fs = require('fs');
const url = require('url');


// creating server 
const myServer = http.createServer((req, res) => {

    if(req.url === '/favicon.io') return res.end();

    const log = `${Date.now()}: ${req.url} New Request Recevied\n`;

    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile('log.txt', log, (err, data) => {

        switch (myUrl.pathname) {
            case '/':
                res.end("HomePage");
                break;
            case '/about':
                const username = myUrl.query.myname;

                 res.end(`I am ${username}`);
                 break;

                 case '/search':
                    const search = myUrl.query.search_query;
                    res.end('here are the result for the javascripts' + search);

            default: res.end("404 not found");

        }
        // res.end('hello from server again')
    });

    // console.log('New req rec.');
    // console.log(req);


    // res.end('hello from server');
});

myServer.listen(8000, () => {
    console.log('server started')
})