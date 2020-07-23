const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('App Working');
})

app.post('/signin', (req, res) => {
    signin.handleSignin(req, res, db, bcrypt);
})

app.post('/register', (req, res) => {
    register.handleRegister(req, res, db, bcrypt);
});

app.put('/image', (req, res) => {
    image.handleImage(req, res, db);
});

app.post('/imageurl', (req, res) => {
    image.handleApiCall(req, res)
});

app.get('/profile/:id', (req, res) => {
    profile.getProfile(req, res, db);
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`App running on port ${process.env.PORT}`);
})