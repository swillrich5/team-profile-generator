// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name, id, email) {
        this.role = 'Employee';
        this.employeName = name;
        this.employeeId = id;
        this.employeeEmail = email;
    }

    getName () {
        return this.EmployeeName;
    }

    getId() {
        return this.employeeId;
    }

    getEmail() {
        return this.employeeEmail;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;