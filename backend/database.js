const mongoose = require ('mongoose');

// Mongoose can create a new database if it doesn't exist yet.
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true // some mongoose error thingy
})
    .then(db => console.log('DB is connected')) // capture the event
    .catch(err => console.error(err)); //error handling



