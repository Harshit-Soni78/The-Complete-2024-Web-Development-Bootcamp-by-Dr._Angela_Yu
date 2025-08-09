# One to Many Relationships

## Introduction to One to Many Relationships

In the previous lesson, we explored One to One Relationships. Now, let's examine the next type of relationship that we can create in our Postgres database. This is probably one of the most frequently used relationships: the One to Many relationship. In many cases, this is the relationship you will often rely on because it occurs very frequently in data storage.

The way a One to Many relationship works is if you consider a case where you have something that has only one record, for example, one student, but that student has many of some other type of data. This results in a One to Many relationship.

### Example: Students and Homework Submissions

In this example, we have our students table as before. In our school, we have students, and each student makes many homework submissions. This is how we end up with a One to Many relationship. Each piece of homework can only have one student who did the work. We do not have group projects in our school, but one student can be associated with many pieces of homework. Therefore, if you take the student as a starting point, this is a One to Many relationship. However, if you take the homework submission as the starting point, then you would call this a Many to One relationship.

Another example to consider is a customer database. Suppose you sell Christmas trees and want to keep track of your customers. A customer can make many orders. For instance, they might make an order for a tree in 2012, another order in 2020, and so on. Here, the orders table represents the Many side, and the customer table represents the One side. To represent this relationship, we need a Many to One relationship.

### Crow's Feet Notation in Database Design

In our database design, the homework table has a crow's feet representation linked to the student id field. This field is the Foreign Key in the homework table, while the id in the student table is the Primary Key. In crow's feet notation, the Many side is represented by a three-legged bird's feet symbol, and the One side has a single line. This notation visually represents the One to Many relationship.

Each homework submission has its own Primary Key because there are many pieces of homework submitted, so each record must be uniquely identified. The Foreign Key links back to the student who created it by storing the student's id.

### Creating the homework_submission Table

Let's create the `homework_submission` table. This table has three fields: a PRIMARY KEY field that uniquely identifies each record, a `mark` field representing the student's score, and a `student_id` field that links to the student who created the homework. For simplicity, only these three fields are included, though in practice, there could be additional fields such as teacher, class, or date.

```sql
CREATE TABLE homework_submission (
    id SERIAL PRIMARY KEY,
    mark INTEGER,
    student_id INTEGER REFERENCES student(id)
);
```

This SQL command creates the `homework_submission` table. The `id` field is set as SERIAL, which automatically generates unique identifiers starting from 1 and incrementing for each new record. The `student_id` field is a Foreign Key referencing the `id` field in the `student` table, establishing the Many to One relationship.

### Setting up the Foreign Key Relationship

The `REFERENCES` keyword is used to set up the Foreign Key. This means that the `student_id` in the `homework_submission` table must correspond to an existing `id` in the `student` table. This enforces referential integrity between the two tables.

Let's create this table in pgAdmin to work with it. Open the query editor, paste the SQL command, and execute it under the school database. After refreshing, you will see the new table called `homework_submission`.

### Naming Conventions for Tables

Be mindful of pluralization when naming tables. Some prefer plural names like `contact_details`, `homework_submissions`, `students`, while others prefer singular names like `contact_detail`, `student`. It is important to choose a consistent naming scheme and stick to it to maintain clarity and avoid confusion.

### Inserting Data into homework_submission

Now that the `homework_submission` table is created, let's add some data. The `id` field is automatically generated, so we only need to insert values for `mark` and `student_id`.

```sql
INSERT INTO homework_submission (mark, student_id) VALUES
    (85, 1),
    (90, 1),
    (78, 1);
```

This inserts three homework submissions with different marks, all associated with the same student whose `id` is 1.

### Viewing Joined Data

To better understand the relationship, we can write SQL code to join the `student` and `homework_submission` tables. This will allow us to see the homework submissions along with the student details.

```sql
SELECT * FROM student
JOIN homework_submission ON student.id = homework_submission.student_id;
```

This query selects all columns from both tables where the `student.id` matches the `homework_submission.student_id`. The result is a joined table showing each homework submission alongside the corresponding student information.
