const { createServer } = require('http');
const { readFileSync } = require('fs');
const { join } = require('path');

// Read the HTML file once at startup
let html;
try {
    html = readFileSync(join(__dirname, 'index.html'), 'utf8');
} catch (error) {
    console.error('Error reading index.html:', error);
    process.exit(1);
}

const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
    try {
        // Set headers
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        
        // Send the HTML content
        res.end(html);
    } catch (error) {
        console.error('Error serving request:', error);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

// Listen on all network interfaces (0.0.0.0) instead of just localhost
server.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});

server.on('error', (error) => {
    console.error('Server error:', error);
    process.exit(1);
});