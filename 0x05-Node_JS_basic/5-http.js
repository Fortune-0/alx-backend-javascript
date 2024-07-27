const http = require('http');
const fs = require('fs');

const db = process.argv[2] === undefined ? '' : process.argv[2];
const host = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        resp.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        // Read content from the file 3-read_file_async.js
        // Construct the appropriate response (you'll need to implement this part)
        // Example: Read the file, parse data, and display student information
        fs.readFile(db, 'utf-8', (error, data) => {
            if (error) {
                resp.end('Cannot load the database');
            } else {
                const students = data.split('\n').filter(line => line.trim() !== '').slice(1); // assuming the first line is a header
                const response = ['This is the list of our students'];
                response.push(`Number of students: ${students.length}`);
                students.forEach(student => response.push(student));
                resp.end(response.join('\n'));
            }
        });
    } else {
        resp.statusCode = 404;
        resp.end('Not Found');
    }
});

app.listen(port, host, () => {
    console.log(`Server is live, running at http://${host}:${port}`);
});

module.exports = app;
