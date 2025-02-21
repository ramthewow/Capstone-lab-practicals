const express = require('express');
const app = express();

// Middleware to parse JSON request bodies (optional for POST routes)
app.use(express.json());

//route 1- GET request
app.get('/', (req, res) => {
    res.send('Welcome to the Express Routing Example!'); //landing page, displays a welcome message
});

app.get('/about', (req, res) => {
    res.send('This is the About page.'); //displays an about page when the /about route is accessed
});

//route 2- POST request
app.post('/submit', (req, res) => {
    const data = req.body; //accesses the data sent in request body
    res.send(`Form submitted successfully! Data: ${JSON.stringify(data)}`);
});


//route 3- dynamic route with parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; //extract dynamic parameter from the URL
    res.send(`User Profile for ID: ${userId}`);//display the user profile for specified ID
});

//route 4- route with query parameters
app.get('/search', (req, res) => {
    const query = req.query.q; //access query parameter 'q'
    if (query) {
        res.send(`Search results for: ${query}`);//displays query results
    } else {
        res.send('Please provide a search query (e.g., /search?q=example).');
    }
});

//route 5- PUT route to update a resource
app.put('/update/:id', (req, res) => {
    const id = req.params.id; // Get the ID from the URL
    const updateData = req.body; // Get the update data from the request body
    res.send(`Resource with ID: ${id} has been updated with data: ${JSON.stringify(updateData)}`);
});

//route 6- DELETE route to delete a resource
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id; // Get the ID from the URL
    res.send(`Resource with ID: ${id} has been deleted.`);
});

//Error 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).send('Oops! Route not found.');
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
