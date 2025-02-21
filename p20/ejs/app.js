const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define a route to render an EJS template
app.get('/', (req, res) => {
    const data = {
        title: 'My EJS Page',
        message: 'Welcome to EJS!',
        items: ['Apple', 'Banana', 'Cherry']
    };
    res.render('index', data); // Render the 'index.ejs' template with data
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});