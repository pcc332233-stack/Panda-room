const express = require('express');
const ytSearch = require('yt-search');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/api/cari', async (req, res) => {
    const query = req.query.q || 'panda';
    try {
        const r = await ytSearch(query);
        res.json(r.videos.slice(0, 10));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = app;
