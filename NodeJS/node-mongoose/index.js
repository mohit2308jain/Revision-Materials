const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/confusion';
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

connect.then((db) => {

    console.log('Connected to Database');

    /*
    var newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    })

    newDish.save()
    */

    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
    .then((dish) => {
        console.log("Inserted: ", dish);

        return Dishes.findByIdAndUpdate(dish._id, {
            $set: { description: 'Updated-test' }
        },{
            new: true
        })
        .exec();

        //return Dishes.find({}).exec();
    })
    .then((dish) => {
        console.log("List: ", dish);

        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a sinking feeling!',
            author: 'Leonardo'
        })

        return dish.save();
    })
    .then((dish) => {
        console.log("Comments Added", dish);
    
        return Dishes.deleteMany({});
    })
    .then(() => {
        console.log("Deleted")
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err)
    })
})
