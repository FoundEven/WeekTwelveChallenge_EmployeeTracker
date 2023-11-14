INSERT INTO department (id, name)
VALUE (1, "Math"),
        (2, "Science");





INSERT INTO role (id, title, salary, department_id)
VALUE (1, "Algebra", 20.00, 1),
        (2, "Chemistry", 19.00, 2),
        (3, "Trigonometry", 22.00, 1);



INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (1, "Steven", "Smith", 1, 2),
        (2, "Eleanor", "Miller", 2, 1),
        (3, "Jack", "Parker", 1, 2),
        (4, "Arthur", "Clark", 3, 1),
        (5, "Emma", "Moore", 1, 1),
        (6, "Joseph", "Adams", 2, 1),
        (7, "Anna", "Lewis", 2, 2),
        (8, "Sophia", "Carter", 1, 1),
        (9, "Jacob", "Cooper", 3, 2);