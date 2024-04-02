const {Employee} = require('../models');

const getAll = async (req,res) => {
    const employeeList = await Employee.findAll();
    res.statusCode = 200;
    res.json(employeeList);
}

module.exports = {getAll}