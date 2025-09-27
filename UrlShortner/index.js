const express = require('express');
const path = require('path');
const { connectDB } = require('./connect');
const urlRoutes = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const { handleRedirectUrl } = require('./controllers/url');

const app = express();
const PORT = 8001;

// Middleware for JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use('/', staticRoute);
app.use('/url', urlRoutes);

connectDB('mongodb://localhost:27017/urlshortner').then(() => console.log('DB Connected'));

// Use controller for redirect logic
app.get('/:shortId', handleRedirectUrl);

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});