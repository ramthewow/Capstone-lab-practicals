const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Render the form to add a new employee
router.get('/add', (req, res) => {
  res.render('add-employee');
});

// Create a new employee
router.post('/add', async (req, res) => {
  const { name, email, position, salary } = req.body;
  const newEmployee = new Employee({ name, email, position, salary });
  await newEmployee.save();
  res.redirect('/');
});

// Read all employees
router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.render('index', { employees });
});

// Render the form to update an employee
router.get('/edit/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.render('edit-employee', { employee });
});

// Update an employee
router.post('/edit/:id', async (req, res) => {
  const { name, email, position, salary } = req.body;
  await Employee.findByIdAndUpdate(req.params.id, { name, email, position, salary });
  res.redirect('/');
});

// Delete an employee
router.get('/delete/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;