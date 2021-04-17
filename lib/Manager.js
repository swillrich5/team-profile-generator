// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(attributes) {
        super(attributes.managerName, attributes.managerId, attributes.managerEmailAddress);
        this.officeNumber = attributes.officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;