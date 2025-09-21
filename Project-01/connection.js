const mongoose = require('mongoose');

async function connectMongoDb(url) {
    // connections
    return mongoose.connect(url);


}

module.exports = {
    connectMongoDb,
}