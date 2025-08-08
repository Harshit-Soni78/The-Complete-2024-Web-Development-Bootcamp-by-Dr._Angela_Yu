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
