const { nanoid } = require("nanoid");
const URL = require("../models/url");

//  Generate short URL
async function handleGenerateShortUrl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ message: "Invalid request, url is required" });
    }

    const shortId = nanoid(8);

    try {
        await URL.create({
            shortId,
            redirectUrl: body.url,   //  matches schema
            visitHistory: [],
        });

        return res.render('home', {
           shortId: shortId
        });
    } catch (err) {
        console.error("Error creating short URL:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

// Redirect handler
async function handleRedirectUrl(req, res) {
    const shortId = req.params.shortId;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { visitedAt: new Date() } } },
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({ message: "Short URL not found" });
        }

        return res.redirect(entry.redirectUrl);
    } catch (err) {
        console.error("Error during redirect:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//  Analytics handler
async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;

    try {
        const result = await URL.findOne({ shortId });

        if (!result) {
            return res.status(404).json({ message: "Short URL not found" });
        }

        return res.json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory,
        });
    } catch (err) {
        console.error("Error fetching analytics:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    handleGenerateShortUrl,
    handleRedirectUrl,
    handleGetAnalytics,
};
