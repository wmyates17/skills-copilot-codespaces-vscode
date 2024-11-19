//Create web server
//Create a web server that listens to requests on port 3000. When it receives a request to /comments, it should respond with an array of comments.

const express = require('express');
const app = express();
const port = 3000;

const comments = [{body: 'first comment'}, {body: 'second comment'}];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.listen(port, () => {
    console.log('Server is listening on port 3000');
});
