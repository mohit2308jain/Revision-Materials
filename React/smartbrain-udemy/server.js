const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'mohit',
        database: 'smart-brain'
    }
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(db1.users);
})

app.post('/signin', (req, res) => {
    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then((data) => {
            const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
            if(isValid){
                return db.select('*').from('users')
                    .where('email', '=', req.body.email)
                    .then((user) => {
                        res.json(user[0])
                    })
                    .catch((err) => res.status(400).json('Unable to get user'));
            }
            else{
                res.status(400).json('Wrong credentials');
            }
        })
        .catch((err) => res.status(400).json('Wrong credentials'));
})

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then((loginEmail) => {
            return trx('users')
            .returning('*')
            .insert({
                email: loginEmail[0],
                name: name,
                joined: new Date()
            })
            .then((user) => res.json(user[0]))
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch((err) => res.status(400).json('Unable To Register.'));
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    db('users')
        .where('id', '=', id)
        .increment('entries', 1)
        .returning('entries').
        then((entries) => {
            res.json(entries[0]);
        })
        .catch((err) => res.status(400).json('Unable to get entries'));

})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;

    db.select('*').from('users').where({
        id: id
    })
    .then((user) => {
        if(user.length){
            res.json(user[0])
        }
        else{
            res.status(400).json('Error getting user');
        }
    })
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