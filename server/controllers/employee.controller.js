const Employee = require('../models/employees');
const employeeCtrl = {};

employeeCtrl.getEmployees = async(req, res, next) => {
    let employees = await Employee.find();
    res.json(employees);
};


employeeCtrl.createEmployee = async(req, res, next) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({status: 'save employee'});
};

employeeCtrl.getEmployee = async(req, res, next) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

employeeCtrl.editEmployee = async(req, res, next) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });

    res.json({ status: "employee updated!" })
};

employeeCtrl.deleteEmployee = async(req, res, next) => {
    const { id } = req.params;
    await Employee.findByIdAndRemove(id);
    res.json({ status: 'employee deleted' })
};

module.exports = employeeCtrl;