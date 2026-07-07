const ytSearch = require('yt-search');

module.exports = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.status(400).json({ error: "Missing query parameter" });
        }
        
        const r = await ytSearch(query);
        const videos = r.videos.slice(0, 10);
        
        res.status(200).json(videos);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};

