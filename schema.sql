DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE role(
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
department_id INT NULL
);

CREATE TABLE employee(
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
roleID INT NOT NULL,
manager_I INT NULL
);

INSERT INTO department (name) VALUES ("Accounting"), ("Marketing"), ("Sales"), ("IT");
INSERT INTO role (title, salary, department_id) VALUES ("Accountant", 100000, 1),("Sales Manager", 75000, 3),  ("Graphic Design", 100000, 2), ("Sales Associate", 70000, 3),("IT Specialist", 100000, 4),("Production Management", 120000, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Billy", "Brown", 3, NULL), ("Georgia", "Scott", 4, 4), ("Liam", "Barnes", 12, 3), ("Sierra", "Brimmer", 4, 4), ("Tre", "Daniels", 6, NULL), ("Baylor", "Anderson", 5, 3);

SELECT * FROM department;

SELECT * FROM role;

SELECT * FROM employee;
