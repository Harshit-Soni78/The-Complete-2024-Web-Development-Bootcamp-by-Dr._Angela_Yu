-- Many to Many --
CREATE TABLE class (
  id SERIAL PRIMARY KEY,
  title VARCHAR(45)
);

CREATE TABLE enrollment (
  student_id INTEGER REFERENCES student(id),
  class_id INTEGER REFERENCES class(id),
  PRIMARY KEY (student_id, class_id)
);

-- Data --
INSERT INTO student (first_name, last_name)
VALUES ('Jack', 'Bauer');

INSERT INTO class (title)
VALUES ('English Literature'), ('Maths'), ('Physics');

INSERT INTO enrollment (student_id, class_id ) VALUES (1, 1), (1, 2);
INSERT INTO enrollment (student_id ,class_id) VALUES (2, 2), (2, 3);

-- Join --
SELECT *
FROM enrollment 
JOIN student ON student.id = enrollment.student_id
JOIN class ON class.id = enrollment.class_id;

SELECT student.id AS id, first_name, last_name, title
FROM enrollment 
JOIN student ON student.id = enrollment.student_id
JOIN class ON class.id = enrollment.class_id;

-- ALIAS --
SELECT s.id AS id, first_name, last_name, title
FROM enrollment AS e
JOIN student AS s ON s.id = e.student_id
JOIN class AS c ON c.id = e.class_id;


SELECT s.id AS id, first_name, last_name, title
FROM enrollment e
JOIN student s ON s.id = e.student_id
JOIN class c ON c.id = e.class_id;
