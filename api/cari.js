const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const query = req.query.q || 'panda';
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    
    try {
        const response = await fetch(url);
        const text = await response.text();
        
        // Sebagai bukti server aktif, kita kirim pesan sukses
        res.status(200).json({ 
            status: "Success", 
            message: "Server berhasil mengambil data dari YouTube",
            query: query 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
