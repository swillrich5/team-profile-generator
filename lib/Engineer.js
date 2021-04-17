// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(answers) {
        super(answers.engineerName, answers.engineerId, answers.engineerEmailAddress);
        this.gitHubUsername = answers.engineerGitHub;
    }

    getGitHub() {
        return this.gitHubUsername;
    }
}

module.exports = Engineer;