const { createServer } = require('node:http');
const { readFileSync } = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    // Read the HTML file
    const html = readFileSync('index.html', 'utf8');

    // Set headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Send the HTML content
    res.end(html);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});