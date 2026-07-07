const ytSearch = require('yt-search');

module.exports = async (req, res) => {
    try {
        const query = req.query.q || 'panda';
        const result = await ytSearch(query);
        const videos = result.videos.slice(0, 10);
        res.status(200).json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
