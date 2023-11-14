//packages
const inquirer = require("inquirer");
const select = require('./selectC');

function init() {

    inquirer.prompt([

        {
            type: 'list',
            message: 'What would you lik to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
            name: 'chosenL',
        },


    ]).then((data) => {
        //selects function based of what you choose
        if(data.chosenL === 'view all departments') {
            select.viewDepartments();
        }
        if(data.chosenL === 'view all roles') {
            select.viewRole();
        }
        if(data.chosenL === 'view all employees') {
            select.viewEmployees();
        }
        if(data.chosenL === 'add a department') {
            select.addDepartment();
        }
        if(data.chosenL === 'add a role') {
            select.addRole();
        }
        if(data.chosenL === 'add an employee') {
            select.addEmployee();
        }
        if(data.chosenL === 'update an employee role') {
            select.updateEmployee();
        }


    });
};

    //starts program
    init();