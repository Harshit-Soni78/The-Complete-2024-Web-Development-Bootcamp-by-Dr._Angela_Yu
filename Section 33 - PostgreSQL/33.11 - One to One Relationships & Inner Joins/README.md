# One to One Relationships & Inner Joins

## Introduction to Relational Databases and PostgreSQL

In this lesson, we are going to learn all about relational databases and how that applies to PostgreSQL. We will look at different types of relationships such as One to Many, One to One, and Many to Many relationships. We will also see how we can join our tables together that are constructed using these relationships.

## Importance of Relationships in SQL Databases

Relationships are a significant aspect of SQL-type databases, and it is what they are strong at. They are essentially the relationship goals of all the different databases. This is where the power of SQL databases comes in. Let us explore and see how we can create great relationships.

## One to One Relationships

The first type of relationship we will look at is the simplest: a One to One relationship. In a crow's feet diagram, One to One relationships are represented in a specific way. On one side, we have a table called `student`, and on the other side, a table called `contact`. These two tables are linked together using a 1:1 relationship, and they are linked by the field that is the `id`.

When you think of a One to One relationship, it means that there is one entry in the `student` table that maps to one entry in the `contact` table. Often, this is a way to modularize your database. For example, if you have a table with many columns, as the columns increase, your database becomes larger and more difficult to search. Many databases are optimized to have many records (rows), but they can struggle when you have too many fields (columns). Splitting a table using a One to One relationship can help.

## Example: Creating Tables for One to One Relationship

An example of this is represented using SQL code. Here, we are creating two tables: one called `student` and the other called `contact_detail`. These tables represent different pieces of data about a student in an imaginary school. The first table has the `first_name` and `last_name` of the student, and a PRIMARY KEY to represent the `id` of that record. This is a simplified example, but you can imagine a student table containing such information.

Every so often, you might need to contact the student's parents, so you would need to look up the student in the `contact_detail` table. Here, we extend the student table by adding more details related to their contacts, such as telephone number or address. While all of this could be inside the student table, it is not modular. Tables are more efficient if we can separate them into different tasks or roles.

## Linking Tables with One to One Relationship

To link them, we have a One to One relationship between the `id`s. The `id` of the student is the PRIMARY KEY of the student table, and we use that same `id` when we create a record in the `contact_detail` table. This is set to be UNIQUE, so it cannot reoccur in this table. We cannot map two student ids to two different records, for example. We set it as an integer because the id is an integer, a whole number. The REFERENCES keyword in Postgres sets this field as a FOREIGN KEY.

Now we have a PRIMARY KEY that uniquely identifies all records in the student table, and a FOREIGN KEY that identifies the relationship between records in the `contact_detail` table and the records in the student table.

## Database Design and Visualization

We are now getting into the realm of database design. Often, people design their databases using drawings, which you can create yourself using tools like draw.io. You can create tables, add fields, and plan different relationships and links between tables. This is an easy, at-a-glance way to see how we have a 1:1 relationship between the id fields in these two tables.

## Exercise: Creating Tables in PostgreSQL

You should create this in Postgres yourself. Complete these sessions as an exercise to practice creating these relationships. First, go into the resources for this session and download the 8.5 Family Travel Tracker. This file contains all the starting files needed for the final exercise, and also a file called `queries.sql` with all the queries from this lesson. This allows you to copy commands and put them into Postgres, avoiding typos or spelling errors.

Collapse all your databases, then create a new database called `school`. Click Save, and the school database will be created. Click on the Query tool to connect to the school database. Paste in the queries you copied. The lines starting with two dashes (--) are comments, which separate different parts of the queries. In SQL, comments are created using two dashes, unlike JavaScript which uses two forward slashes. Comments will not be executed as code.

Now that the code is in, create the two tables by running those commands. If you go into Schemas and hit Refresh, you should see the two tables created. They do not yet have any data. Populate some data by copying the part from the Data section and pasting it into the Query section. Hit Run to insert the data into the tables.

The first command inserts into the students table, adding a student named Angela Yu. Then, insert details into the `contact_detail` table, including telephone number, address, and the FOREIGN KEY, the student id. Since the student table's Primary Key is SERIAL, the id starts from 1, and this is the only entry added so far. The id for this student is 1, which is inserted into the `contact_detail` table as the id of this record. An imaginary telephone number and address are added, and using this FOREIGN KEY, it is linked to the PRIMARY KEY. These two records, though in different tables, are now linked through this 1:1 relationship.

## Using One to One Relationships with INNER JOIN

To use this One to One relationship, if we want to bring up the entire record, we use SQL. The following code selects all fields from the student table and joins it with the contact_detail table using an INNER JOIN, matching the ids.

```sql
SELECT * FROM student
JOIN contact_detail ON student.id = contact_detail.id;
```

The SELECT \* selects everything from the student table. The JOIN keyword performs what is known as an INNER JOIN, joining two tables based on criteria determined by the ON keyword. Here, we look inside the student table, find the id (the Primary Key), and check for equality with the id in the contact_detail table. When they match, we find the record containing all details of that student. The FOREIGN KEY and PRIMARY KEY match, and we get the complete record.

Running this command results in a single table with all fields corresponding to that entry. This is how we use a One to One relationship.
