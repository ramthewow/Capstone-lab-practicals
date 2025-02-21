const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store user details
const users = [];

// Routes

// Render sign-up page
app.get("/signup", (req, res) => {
  res.render("signup");
});

// Handle sign-up form submission
app.post("/signup", (req, res) => {
  const { name, age, username, password } = req.body;

  // Check if username already exists
  if (users.some((user) => user.username === username)) {
    return res.send("Username already exists. Please try another.");
  }

  // Add user to the array
  users.push({ name, age, username, password });
  res.redirect("/login");
});

// Render login page
app.get("/login", (req, res) => {
  res.render("login");
});

// Handle login form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check credentials
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.render("welcome", { username: user.name });
  } else {
    res.send("Invalid credentials. Please try again.");
  }
});

// Logout and redirect to sign-up
app.get("/logout", (req, res) => {
  res.redirect("/signup");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
