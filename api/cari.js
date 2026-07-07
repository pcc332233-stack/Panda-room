const ytSearch = require('yt-search');

module.exports = async (req, res) => {
    const query = req.query.q;
    
    // Jika tidak ada kata kunci, beri tahu user
    if (!query) {
        return res.status(400).json({ error: "Gunakan ?q=kata_kunci" });
    }

    try {
        const result = await ytSearch(query);
        // Pastikan kita mengambil data video saja
        const videos = result.videos;
        
        if (videos && videos.length > 0) {
            res.status(200).json(videos.slice(0, 5));
        } else {
            res.status(200).json({ message: "Tidak ada video ditemukan" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
