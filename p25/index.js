const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

// Configure session middleware
app.use(
    session({
        secret: 'your-secret-key', // Secret used to sign the session ID cookie
        resave: false, // Don't save the session if it wasn't modified
        saveUninitialized: true, // Save new sessions
        cookie: {
            maxAge: 15000, // Session timeout in 15 seconds
            httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
        },
    })
);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to show session ID and store data in session
app.get('/set-session', (req, res) => {
    // Store data in the session
    req.session.user = {
        id: 1,
        name: 'Ram Menon',
    };

    res.send(`
        <h1>Session Set</h1>
        <p>Session ID: ${req.sessionID}</p>
        <p>Data stored in session: ${JSON.stringify(req.session.user)}</p>
        <a href="/get-session">View Session Data</a>
    `);
});

// Route to retrieve data from session
app.get('/get-session', (req, res) => {
    if (req.session.user) {
        res.send(`
            <h1>Session Data</h1>
            <p>Session ID: ${req.sessionID}</p>
            <p>Data retrieved from session: ${JSON.stringify(req.session.user)}</p>
            <p>Session will expire in ${req.session.cookie.maxAge / 1000} seconds.</p>
            <a href="/clear-session">Clear Session</a>
        `);
    } else {
        res.send(`
            <h1>No Session Data Found</h1>
            <p>Your session may have expired or been cleared.</p>
            <a href="/set-session">Set Session Data</a>
        `);
    }
});

// Route to clear (expire) the session
app.get('/clear-session', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send('Error clearing session');
        }
        res.send(`
            <h1>Session Cleared</h1>
            <p>Your session has been destroyed.</p>
            <a href="/set-session">Set New Session</a>
        `);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});