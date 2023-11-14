const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employee12_db'
    },
    console.log(`Connected to the employee12_db database.`)
  );

  function viewDepartments() {
    db.query(`SELECT * FROM department;`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

  function viewRole() {
    db.query(`SELECT * FROM role;`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

  function viewEmployees() {
    db.query(`SELECT * FROM employee;`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

  function addDepartment() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is the new department called?',
        name: 'name',
      },
    ]).then((data) => {
      db.query(`INSERT INTO department (name) VALUES ("?");`, data.name, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });
    });
  }

  function addRole() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is the new department called?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the new department called?',
        name: 'salary',
      },
      {
        type: 'input',
        message: 'What is the new department called?',
        name: 'depart',
      },
    ]).then((data) => {
      db.query(`INSERT INTO department (title, salary, department_id) VALUES ("?",?,"?");`, data.name, data.salary, data.depart, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });
    });
  }

  function addEmployee() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is the new department called?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the new department called?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the new department called?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the new department called?',
        name: 'name',
      },
    ]).then((data) => {
      db.query(`INSERT INTO department (name) VALUES ("?");`, data.name, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });
    });
  }

function updateEmployee() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What shape do you want it to be?',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
      name: 'chosenL',
    },
    {
      type: 'list',
      message: 'What shape do you want it to be?',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
      name: 'depart',
    },
  ]).then((data) => {
    db.query(`UPDATE employee SET department = ? WHERE first_name = ?;`, data.depart, data.chosenL, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
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