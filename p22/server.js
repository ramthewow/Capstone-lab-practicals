const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST request to accept Employee Form data
app.post('/api/employee', (req, res) => {
    const { name, email, age, department, salary } = req.body;

    // Response
    res.json({
        message: "Employee data received successfully!",
        employee: {
            name,
            email,
            age,
            department,
            salary
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
