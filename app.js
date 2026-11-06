const express = require('express');
const app = express();
const PORT = 8000;


const serverStartTime = new Date().toLocaleString('id-ID', {
    dateStyle: 'full',
    timeStyle: 'medium'
});


app.get('/', (req, res) => {
    res.send('Selamat datang di server Kelompok gallagher!');
});


app.get('/info', (req, res) => {
    res.send(`Server ini mulai dijalankan pada: ${serverStartTime}`);
});


app.get('/anggota', (req, res) => {
    res.json({
        kelompok: "gallagher",
        anggota: [
            "M Rizky Aditya",
            "sparta",
            "bangkit",
            "fhadil sputra"
        ]
    });
});


app.listen(PORT, () => {
    console.log(`Server Express berjalan di http://localhost:${PORT}`);
});