const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.port || 4000;
app.listen(PORT);