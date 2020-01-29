var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "RKW@1993!",
  database: "employeeDB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
  inquirer.prompt({
    name: "action",
    type: "rawlist",
    message: "What would you like to do?",
    choices: [
      "Add an employee",
      "View an employee",
      "Update an employee",
      "Add a role",
      "View a role",
      "Add a department",
      "View a department"
    ]
  }).then(function (answer) {
    switch (answer.action) {
      case "Add an employee":

        break;

      case "View an employee":

        break;

      case "Update an employee":

        break;

      case "Add a role":

        break;

      case "View a role":

        break;

      case "Add a department":

        break;

      case "View a department":

        break;
    }
  });

}

function addEmployees() {
  inquirer
  .prompt(
      {
         type: "input",
         name: "first name",
         message: "What is the employees first name?"
      },
      {
          type: "input",
          name: "last name",
          message: "What is the employees last name?"
      },
      {
          type: "input",
          name: "role",
          message: "What is the employees role?"
      },
      {
          type: "input",
          name: "manager",
          message: "Who is the employees manager?"
      }
  )
}
function viewEmployee() {

}

function updateEmployee() {

}

function addRole() {

}

function viewRole() {

}

function addDepartment() {

}

function viewDepartment() {

}
