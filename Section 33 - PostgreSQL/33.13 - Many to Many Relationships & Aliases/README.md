# Many to Many Relationships & Aliases

## Many to Many Relationships

The last type of relationship we will discuss is the Many to Many relationship. This is probably one of the most complex and least used types of relationships.

What is a Many to Many relationship? Let's consider it on a larger scale first. For example, a student in a school can be enrolled in many classes. One student can be subscribed to many classes such as English, maths, and physics.

This direction of the relationship is one student to many classes. For instance, one student like Angela can be subscribed to many classes such as English, maths, and physics.

On the other hand, one class, such as an English class, can be taken by many students. For example, Angela, Amy, Emily, and many other students can be enrolled in the same English class.

This is a one class to many students relationship. If you have two One to Many relationships, one from each side of the table, then overall you get a Many to Many relationship.

This type of relationship occasionally occurs in our data storage needs. To represent this relationship in PostgreSQL, we create a new table that represents just that relationship.

We cannot represent the relationship alone using a single relationship. Each record in the Enrollment table will have a student id and a class id. For each class that the student subscribes to, there is a separate record.

For example, Student 1 is subscribed to Class 1 and Class 3. Student 2 is subscribed to Class 1, and so on. This table in its entirety represents the Many to Many relationship.

If we wanted to represent the Many to Many relationship directly between two tables, we would have two crow's feet linking fields with each other. However, in PostgreSQL, we use an extra table to create this relationship.

Therefore, the database design often shows that the student_id has a Many to One relationship with the Enrollment table, and the class_id also has a Many to One relationship with the Enrollment table.

### Creating Tables for Many to Many Relationship

Let's create two new tables in pgAdmin: the class table and the enrollment table. The class table contains the title of the class and a primary key that uniquely identifies the class.

The enrollment table contains student_id and class_id, both set up as foreign keys referencing the student and class tables respectively. The primary key is a combination of these two ids to ensure uniqueness of each enrollment record.

This primary key prevents duplicate records such as multiple entries of Student 1 enrolled in Class 2. Each record in the enrollment table is unique.

After creating these tables, refreshing the database will show the new tables: class and enrollment. We can then add data to these tables to work with.

### Adding Data

We add students and classes. For example, student with id 2 is added, and classes such as English literature, maths, and physics are added with ids 1, 2, and 3 respectively.

Enrollment records are created to link students to classes. For example, Student 1 is enrolled in Class 1 and Class 2 (English and maths), and Student 2 (Jack Bauer) is enrolled in Class 2 and Class 3 (maths and physics).

### Using JOIN to Query Many to Many Relationships

We can use the JOIN keyword to take advantage of this Many to Many relationship. For example, selecting everything from the enrollment table and joining it with the student and class tables on matching foreign keys.

This results in a joined table showing all enrollment records along with corresponding student and class information. Each unique record in the enrollment table is represented, with duplicated student or class data appearing multiple times as appropriate.

We can then query this joined table to answer questions such as how many students are taking maths (two students), which classes Angela is taking (maths and English), or which classes Angela and Jack are taking together.

This demonstrates how a Many to Many relationship can represent data where one student attends many classes and one class has many students.

## Aliases in SQL

An alias is an alternative name for a table or column, established using the AS keyword. For example, selecting fields such as first_name, last_name, title, and renaming student.id as stud for clarity in the output.

Using aliases helps when dealing with multiple fields named id from different tables, allowing each to have a distinct name in the query result for easier understanding.

Aliases can also simplify SQL queries by shortening table names. For example, setting aliases such as enrollment as e, student as s, and class as c allows referencing tables with these short names instead of full names.

This makes the code shorter and easier to write, especially in longer queries where typing full table names repeatedly can be tedious.

The AS keyword is optional when setting aliases for tables. For example, writing `enrollment e` instead of `enrollment AS e` achieves the same aliasing effect.

However, it is recommended to use the AS keyword when aliasing columns, as it improves readability and reduces confusion in SELECT statements.
