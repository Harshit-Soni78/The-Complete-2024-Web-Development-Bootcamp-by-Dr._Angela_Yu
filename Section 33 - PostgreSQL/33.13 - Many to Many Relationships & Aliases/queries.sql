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
