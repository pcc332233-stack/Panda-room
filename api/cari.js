const ytsr = require('ytsr');

module.exports = async (req, res) => {
    const query = req.query.q || 'panda';
    try {
        const filters = await ytsr.getFilters(query);
        const filter = filters.get('Type').get('Video');
        const results = await ytsr(filter.url, { limit: 5 });
        
        res.status(200).json(results.items);
    } catch (err) {
        res.status(500).json({ error: "Gagal memuat data: " + err.message });
    }
};
