const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

const db = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@john.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@sally.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'john@john.com'
        }
    ]
}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(db.users);
})

app.post('/signin', (req, res) => {
    if(req.body.email === db.users[0].email && req.body.password === db.users[0].password){
        res.json(db.users[0]);
    }
    else{
        res.status(400).json('Error');
    }
})

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    db.users.push({
        id: '125',
        name: name,
        email: email,
        entries: 0,
        joined: new Date()
    })
    res.json(db.users[db.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    db.users.forEach((user) => {
        if(user.id === id){
            found = true;
            return res.json(user);
        }
    })
    if(!found){
        res.status(400).json('Not found');
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    db.users.forEach((user) => {
        if(user.id === id){
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    })
    if(!found){
        res.status(400).json('Not found');
    }
})

app.listen(3000, () => {
    console.log('App running on port 3000');
})

/*
bcrypt.compare("doughnuts", '$2b$04$Ozgesa5V7DID0WwlVCl4IuIl.DU1eNtjx92JhvYj5/JfhPlORkkf2', (err, result) => {
    console.log('1st guess', result);
});


bcrypt.hash(password, 1, (err, hash) => {
    console.log(hash);
});

*/