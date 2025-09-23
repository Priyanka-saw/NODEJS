const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateShortUrl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ message: "Invalid request, url is required" });
    }

    const shortId = nanoid(8);

    try {
        const newUrl = await URL.create({
            shortId,
            redirectUrl: body.url, // fixed
            visitHistory: [],
        });

        return res.json({ id: shortId});
    } catch (err) {
        console.error("Error creating short URL:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { handleGenerateShortUrl };
