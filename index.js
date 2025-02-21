const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
    }
    if (req.url === '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end('404 Not Found');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    if (req.url === '/contact-me') {
        fs.readFile('contact-me.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end('404 Not Found');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else {
       fs.readFile('404.html', (err, data) => {
           if (err) {
               res.writeHead(404, {'Content-Type': 'text/html'});
               return res.end('404 Not Found');
           }
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.write(data);
           return res.end();
       })   
    }


}).listen(8080, () => { console.log('Server is running...') }
);