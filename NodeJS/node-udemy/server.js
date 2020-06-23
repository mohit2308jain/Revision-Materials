

/*
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) => {
    console.log('<h1>jk</h1>')
    next();
})
app.get('/', (req, res) => {
    const user = {
        name: 'Mohit',
        hobby: 'stamp'
    }
    res.send(user);
})
app.post('/pro', (req,res) => {
    console.log(req.body);
    
    res.send('success');
})

app.listen(3000);

*/

/*
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const user = {
        name: 'John'
    }
    res.end(JSON.stringify(user))
})

server.listen(3000);
*/