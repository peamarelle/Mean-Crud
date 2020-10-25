const mongoose = require('mongoose');

const database = require('./database.json').mongodb;

mongoose.connect(database.URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected!'))
    .catch(err => console.log(err))

module.exports = mongoose;