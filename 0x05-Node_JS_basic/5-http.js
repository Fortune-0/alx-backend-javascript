/**
 * HTTP sever that handles / and /students
 * routes
 */
const http = require('http');
const fs = require('fs');

const db = process.argv[2] === undefined ? '' : process.argv[2];
const host = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, resp) => {
    if (req.url === '/') {
        resp.statusCode = 200;
        resp.setHeader('Content-Type', 'text/plain');
        resp.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        resp.statusCode = 200;
        resp.setHeader('Content-Type', 'text/plain');
        fs.readFile(db, 'utf8', (err, data) => {
            if (err) {
                resp.end('Cannot load the database');
                return;
            }
            const students = data.split('\n').filter(line => line.trim() !== '');
            const csStudents = [];
            const sweStudents = [];
            for (const student of students) {
                const [firstName, lastName, age, field] = student.split(',');
                if (field === 'CS') {
                    csStudents.push(firstName);
                } else if (field === 'SWE') {
                    sweStudents.push(firstName);
                }
            }
            const response = `This is the list of our students\n` +
                `Number of students: ${students.length}\n` +
                `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n` +
                `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
            resp.end(response);
        });
    } else {
        resp.statusCode = 404;
        resp.setHeader('Content-Type', 'text/plain');
        resp.end('Not Found');
    }
});


app.listen(port, host, () => {
  console.log(`Server is live, running at http://${host}:${port}`);
});

module.exports = app;