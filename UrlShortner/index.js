const express = require('express')

const { connectDB } = require('./connect')
const urlRoutes = require('./routes/url')

const URL = require('./models/url')

const app = express();

const PORT = 8001;

app.set('view engine', 'ejs');  


app.use(express.json()); // <-- Move this before routes

connectDB('mongodb://localhost:27017/urlshortner').then(() => console.log("DB Connected")
);

app.use('/url', urlRoutes);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: { timestamp: new Date(),

            }
        }
    })
    res.redirect(entry.redirectUrl);
});


app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});