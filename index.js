const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let filePath;

    // Determine the file path based on the request URL
    if (req.url === '/') {
        filePath = 'index.html';
    } else if (req.url === '/about') {
        filePath = 'about.html';
    } else if (req.url === '/contact-me') {
        filePath = 'contact-me.html';
    } else {
        filePath = '404.html';
    }

    // Read the file and send the response
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If the file is not found, send a 404 response
            if (filePath === '404.html') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end('404 Not Found');
            } else {
                // If any other error occurs, redirect to 404.html
                fs.readFile('404.html', (err, data) => {
                    if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        return res.end('404 Not Found');
                    }
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.write(data);
                    return res.end();
                });
            }
        } else {
            // If the file is found, send it with a 200 status code
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    });
}).listen(8080, () => {
    console.log('Server is running on port 8080...');
});