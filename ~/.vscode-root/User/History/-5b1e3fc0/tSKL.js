const express = require('express');
const router = express.Router();
const employeeController = require('../employeeController');

router.get('/api/employee', employeeController.getAllEmployees);
router.get('/api/employee/:id', employeeController.getEmployeeById);
router.post('/api/employee', employeeController.createEmployee);
router.put('/api/employee/:id', employeeController.updateEmployee);
router.delete('/api/employee/:id', employeeController.deleteEmployee);
router.delete('/api/employee', employeeController.deleteAllEmployees);
router.get('/api/employee', employeeController.searchEmployeesByName);

module.exports = router;
