const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbopr = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'confusion';

MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');
    const db = client.db(dbname);

    dbopr.insertDocument(db, { name: "Vadonut", description: "Test"},
        "dishes")
        .then((result) => {
            console.log("Insert Document:\n", result.ops);

            return dbopr.findDocuments(db, "dishes");
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);

            return dbopr.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes");

        })
        .then((result) => {
            console.log("Updated Document:\n", result.result);

            return dbopr.findDocuments(db, "dishes");
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);
                            
            return db.dropCollection("dishes");
        })
        .then((result) => {
            console.log("Dropped Collection: ", result);

            return client.close();
        })
        .catch((err) => console.log(err));

})
.catch((err) => console.log(err));

/*

MongoClient.connect(url, (err, client) => {

    assert.equal(err, null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);

    dbopr.insertDocument(db, { name: "Vadanut", decription: "Test" }, 'dishes', (res) => {
        
        console.log('Insert Document:\n', res.ops);

        dbopr.findDocuments(db, 'dishes', (docs) => {

            console.log('Found the Docs:\n', docs);

            dbopr.updateDocument(db, {name: 'Vadanut'}, {description: 'Updated Test'}, 'dishes', (res) => {

                console.log('Updated Document:\n', res.result);

                dbopr.findDocuments(db, 'dishes', (docs) => {

                    console.log('Found the Docs:\n', docs);

                    db.dropCollection('dishes', (res) => {
                        
                        console.log('Removed the collection ', res);

                        client.close();
                    })
                })
            })
        })
    });

    */

    /*
    const collection = db.collection('dishes');

    collection.insertOne({ "name": "Uthappizza", "description":"test"}, (err, res) => {
        assert.equal(err, null);

        console.log('After Insert:\n');
        console.log(res.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);

            console.log('Found:\n');
            console.log(docs);

            db.dropCollection('dishes', (err, res) => {
                assert.equal(err, null);

                client.close();
            });
        });
    });
    
});

*/