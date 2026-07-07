const ytSearch = require('yt-search');
module.exports = async (req, res) => {
    const query = req.query.q || 'panda';
    try {
        const r = await ytSearch(query);
        res.status(200).json(r.videos.slice(0, 10));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
