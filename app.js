const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { inherits } = require("util");

employees = [];

const managerQuestions = [
    {
      type: 'input',
      message: 'Please enter the team manager\'s name?',
      name: 'managerName',
    },
    {
      type: 'input',
      message: 'Please enter the team manager\'s employee ID?',
      name: 'managerId',
    },
    {
      type: 'input',
      message: 'Please enter the team manager\'s emailAddress',
      name: 'managerEmailAddress',
    },
    {
        type: 'input',
        message: 'Please enter the team manager\'s office number',
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Would you like to add an Intern or Engineer?',
        name: 'internOrEngineer',
        choices: ['Intern', 'Engineer', 'Finished Building Team']
      }
];


const engineerQuestions = [
    {
      type: 'input',
      message: 'Please enter the engineer\'s name?',
      name: 'engineerName',
    },
    {
      type: 'input',
      message: 'Please enter the team engineer\'s employee ID?',
      name: 'engineerId',
    },
    {
      type: 'input',
      message: 'Please enter the engineer\'s emailAddress',
      name: 'engineerEmailAddress',
    },
    {
      type: 'input',
      message: 'Please enter the engineer\'s GitHub username',
      name: 'engineerGitHub',
    },
    {
        type: 'list',
        message: 'Would you like to add an Intern or Engineer?',
        name: 'internOrEngineer',
        choices: ['Intern', 'Engineer', 'Finished Building Team']
    }
];


const internQuestions = [
    {
      type: 'input',
      message: 'Please enter the intern\'s name?',
      name: 'internName',
    },
    {
      type: 'input',
      message: 'Please enter the intern\'s employee ID?',
      name: 'internId',
    },
    {
      type: 'input',
      message: 'Please enter the intern\'s emailAddress',
      name: 'internEmailAddress',
    },
    {
      type: 'input',
      message: 'Please enter the intern\'s school',
      name: 'internSchool',
    },
    {
        type: 'list',
        message: 'Would you like to add an Intern or Engineer?',
        name: 'internOrEngineer',
        choices: ['Intern', 'Engineer', 'Finished Building Team']
    }
];


var questions = managerQuestions;

function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
            if (questions === managerQuestions) {
                var manager = new Manager(answers.managerName, answers.managerId, answers.managerEmailAddress, answers.officeNumber);
                manager.role = 'Manager';
                employees.push(manager);
             } else if (questions === internQuestions) {
                var intern = new Intern(answers.internName, answers.internId, answers.internEmailAddress, answers.internSchool);
                intern.role = 'Intern';
                employees.push(intern);
            } else if (questions === engineerQuestions) {
                var engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmailAddress, answers.engineerGitHub);
                engineer.role = 'Engineer';
                employees.push(engineer);
            }



            if (answers.internOrEngineer === 'Intern') {
                questions = internQuestions;
                init()
            } else if (answers.internOrEngineer === 'Engineer') {
                questions = engineerQuestions;
                init();
            }
            else {
                console.log(employees);
                console.log(OUTPUT_DIR);
                if (!fs.existsSync(OUTPUT_DIR)) {
                  fs.mkdir(OUTPUT_DIR, (err) => {
                    if (err) {
                      return console.error(err);
                    }
                  });
                }
                fs.writeFile(outputPath, render(employees), (err) => {
                    if (err) {
                        console.log(err);
                    } else console.log(`Generating HTML...`);

                });
            }
        })
}


init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
