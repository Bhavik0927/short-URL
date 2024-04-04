import { nanoid } from 'nanoid';
import { URL } from '../model/Url.js';

export const handleGenerateShortURL = async (req, res) => {

    const body = req.body;
    console.log(body);
    if (!body.url) return res.status(400).json({ error: "url is required" })

    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    })
    return res.json({ id: shortID })

}

export const handleRedirectURL = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        console.log(shortId)
        const entry = await URL.findOneAndUpdate(
            {
                shortId
            }, {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        });
        console.log(entry);
        // it's express function
        res.redirect(entry.redirectURL)
    } catch (error) {
        console.log(error)
    }
}

export const handleGetAnalytics = async (req, res) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}