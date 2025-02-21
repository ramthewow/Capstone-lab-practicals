const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const name = req.cookies.name || 'Guest';
    const age = req.cookies.age || 'Unknown';

    res.send(`
        <h1>Welcome, ${name}!</h1>
        <p>Your age is ${age}.</p>
        <a href="/set-cookies">Set Name and Age</a>
    `);
});

// Route to display a form for setting cookies
app.get('/set-cookies', (req, res) => {
    res.send(`
        <h1>Set Name and Age</h1>
        <form action="/set-cookies" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Route to handle form submission and set cookies
app.post('/set-cookies', (req, res) => {
    const { name, age } = req.body;

    // Set cookies for name and age
    res.cookie('name', name, { maxAge: 900000, httpOnly: true }); // Expires after 15 minutes
    res.cookie('age', age, { maxAge: 900000, httpOnly: true });

    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});