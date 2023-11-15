const mysql = require('mysql2');
const inquirer = require("inquirer");
//gets a connection to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password/ this is left blsnk for you to put your password here.
      password: '',
      database: 'employee12_db'
    },
    console.log(`Connected to the employee12_db database.`)
  );
    //view all departments
  function viewDepartments() {
    db.query(`SELECT * FROM department;`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }
  //view all roles
  function viewRole() {
    db.query(`SELECT * FROM role;`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }
//view all employees
  function viewEmployees() {
    db.query(`SELECT * FROM employee;`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }
// adds department
  function addDepartment() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is the new department called?',
        name: 'name',
      },
    ]).then((data) => {
      db.query(`INSERT INTO department (name) VALUES ("?");`, data.name, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
//adds new role
  function addRole() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is title of this new role?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'How mush is this role paid?',
        name: 'salary',
      },
      {
        type: 'input',
        message: 'What is the department id that this new role is apart of?',
        name: 'depart',
      },
    ]).then((data) => {
      db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${data.name}", ${data.salary}, ${data.depart});`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
// adds new employee
  function addEmployee() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is there first name?',
        name: 'nameF',
      },
      {
        type: 'input',
        message: 'What is there last name?',
        name: 'nameL',
      },
      {
        type: 'input',
        message: 'What role id are they doing?',
        name: 'roleN',
      },
      {
        type: 'input',
        message: 'What manger id is this person working for?',
        name: 'manager',
      },
    ]).then((data) => {
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${data.nameF}", "${data.nameL}", ${data.roleN}, ${data.manager});`, () => {
        //if (err) {
        //  console.log(err);
        //}
      });
    });
  }
//updates employee to new 
function updateEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the persons first name that you would like to update?',
      name: 'chosenL',
    },
    {
      type: 'input',
      message: 'Which new role will you give them?',
      name: 'depart',
    },
  ]).then((data) => {
    db.query(`UPDATE employee SET role_id = ${data.depart} WHERE first_name = "${data.chosenL}";`, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
}

module.exports = {
  viewDepartments,
  viewRole,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
};