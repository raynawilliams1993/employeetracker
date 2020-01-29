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
  inquirer
    .prompt({
      type: "list",
      name: "viewEmployee",
      message: "Which Employee would you like to view?",
      choices: [
        "Billy", "Brown",
        "Georgia", "Scott",
        "Liam", "Barnes",
        "Sierra", "Brimmer",
        "Tre", "Daniels",
        "Baylor", "Anderson",
      ]
    })
    .then(function (answer) {
      var query = "SELECT employees.employee";
      query += "FROM employees"

      connection.query(query, [answer.employee, answer.employee], function (err, res) {
        console.log(res.length + "view employee");
        for (var i = 0; i < res.length; i++) {
          console.log("Employee: " + res[i].employee);
        }
      });
    });
}
// function updateEmployee() {
//   inquirer
//     .prompt({
//       type: "input",
//       name:"updateEmployee",
//       message: "What would you like to update on an existing employee?"
// //     })

// }

function addRole() {
  inquirer
    .prompt({
      type: "input",
      name: "role",
      message: "what role would you like to add?"
    })

}

function viewRoles() {
  inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "Which roles would you like to view?",
      choices: [
        "Accountant",
        "Sales Manager",
        "Graphic Design",
        "Sales Associate",
        "I.T. Specialist",
        "Production Management"
      ]
    })
    .then(function (answer) {
      const query = "SELECT role FROM employeesDB";
      connection.query(query,[answer.role], function (err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(role)
        }
      })
    })
}

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "department",
      message: "what department would you like to add?"
    })

}

function viewDepartments() {
  inquirer
    .prompt({
      type: "list",
      name: "departments",
      message: "Which department would you like to view?",
      choices: [
        "Accounting",
        "Marketing",
        "Sales",
        "IT",
      ]
    })
    .then(function (answer) {
      const query = "SELECT department FROM employeeDB";
      connection.query(query, [answer.department.department], function (err, res) {
        for (var i = 0; i < res.length.department; i++) {
          console.log(department)
        }
      })
    })
};
runSearch();
viewEmployee();
viewRoles();
viewDepartments();
addDepartment();
addRole();
addEmployees();