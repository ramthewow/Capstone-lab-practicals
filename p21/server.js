const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from Express!" });
});

app.post('/api/message', (req, res) => {
    const { text } = req.body;
    res.json({ received: text, message: "Message received successfully!" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
