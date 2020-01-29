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

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add an Employee",
        "Add a Department",
        "Add a new Role",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update an existing employees role",
        "Find artists with a top song and top album in the same year"
      ]
    })
}