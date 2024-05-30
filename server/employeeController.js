const db = require('./db');


const getAllEmployees = (req, res) => {
    // console.log("keyword=Normal");
    let sql = 'SELECT * FROM employees';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getEmployeeById = (req, res) => {
    let sql = 'SELECT * FROM employees WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
};

const createEmployee = (req, res) => {
    let newEmployee = req.body;
    let sql = 'INSERT INTO employees SET ?';
    db.query(sql, newEmployee, (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, ...newEmployee });
    });
};

const updateEmployee = (req, res) => {
    let updatedEmployee = req.body;
    let sql = 'UPDATE employees SET ? WHERE id = ?';
    db.query(sql, [updatedEmployee, req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ id: req.params.id, ...updatedEmployee });
    });
};

const deleteEmployee = (req, res) => {
    let sql = 'DELETE FROM employees WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Employee deleted' });
    });
};

const deleteAllEmployees = (req, res) => {
    let sql = 'DELETE FROM employees';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ message: 'All employees deleted' });
    });
};


const searchEmployeesByName = (req, res) => {
    console.log("keyword=searchEmployeesByName");
    let keyword = req.query.Name;
    let sql = 'SELECT * FROM employees WHERE name LIKE ?';
    db.query(sql, [`%${keyword}%`], (err, results) => {
        console.log(sql, [`%${keyword}%`]);
        if (err) throw err;
        res.json(results);
    });
};

module.exports = {
    getAllEmployees, 
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    deleteAllEmployees,
    searchEmployeesByName
};
