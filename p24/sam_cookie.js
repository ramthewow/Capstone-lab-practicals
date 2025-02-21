const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
    // Setting a cookie with max age of 15 minutes
    res.cookie('username', 'Ram Menon', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set!');
});

app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username || 'Guest';
    res.send(`Welcome, ${username}!`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});