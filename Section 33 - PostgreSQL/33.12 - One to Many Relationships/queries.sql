-- Many to One --
CREATE TABLE homework_submission (
  id SERIAL PRIMARY KEY,
  mark INTEGER,
  student_id INTEGER REFERENCES student(id)
);

-- Data --
INSERT INTO homework_submission (mark, student_id)
VALUES (98, 1), (87, 1), (88, 1)

-- Join --
SELECT *
FROM student
JOIN homework_submission
ON student.id = student_id

SELECT student.id, first_name, last_name, mark
FROM student
JOIN homework_submission
ON student.id = student_id
