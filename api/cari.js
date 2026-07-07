const ytSearch = require('yt-search');

module.exports = async (req, res) => {
    const query = req.query.q || 'panda';
    try {
        // Menambah sedikit delay agar tidak dianggap serangan bot
        const r = await ytSearch(query);
        const videos = r.videos.slice(0, 5);
        res.status(200).json(videos);
    } catch (err) {
        res.status(500).json({ error: "Gagal memuat: " + err.message });
    }
};
