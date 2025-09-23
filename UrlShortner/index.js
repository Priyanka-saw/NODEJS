const express = require('express')

const { connectDB } = require('./connect')
const urlRoutes = require('./routes/url')
const app = express();

const PORT = 8001;

app.use(express.json()); // <-- Move this before routes

connectDB('mongodb://localhost:27017/urlshortner').then(() => console.log("DB Connected"));
app.use('/url', urlRoutes);

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});