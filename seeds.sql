  
USE employeeDB;

INSERT INTO department 
    (name)
VALUES 
    ("Accounting"),
    ("Marketing"),
    ("Sales"),
    ("IT");
    
    INSERT INTO role 
    (title, salary, department_id)
VALUES 
    ("Accountant", 100000, 1),
    ("Sales Manager", 75000, 3),
    ("Graphic Design", 100000, 2),
    ("Sales Associate", 70000, 3),
    ("IT Specialist", 100000, 4),
    ("Production Management", 120000, 2);


INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES 
    ("Billy", "Brown", 3, NULL),
    ("Georgia", "Scott", 4, 4),
    ("Liam", "Barnes", 12, 3),
    ("Sierra", "Brimmer", 4, 4),
    ("Tre", "Daniels", 6, NULL),
    ("Baylor", "Anderson", 5, 3);