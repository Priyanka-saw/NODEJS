const express = require('express')
// const users = require('./MOCK_DATA.json')
const { connectMongoDb } = require('./connection')
const { logReqRes } = require('./middlewares');

const userRouter = require('./routes/user');

const app = express();
const PORT = 8000;


// connections
// pasted in connection.js
connectMongoDb('mongodb://127.0.0.1:27017/priyanka-dev-1').then(() => console.log('mongodb Connected'));

// Creating Schema
// pasted in user.js model


// middleware - plugin
// take the value from frontend to backend
app.use(express.urlencoded({ extended: false }))

// pasted in connection.js
app.use(logReqRes('log.txt'));

// routes
app.use('/api/users', userRouter);
// pasted in routes ke user.js

app.listen(PORT, () => {
    console.log(`Server Started at Port: ${PORT}`);

});