# One to One Relationships & Inner Joins

## Introduction to Relational Databases and PostgreSQL

In this lesson, we are going to learn all about relational databases and how that applies to PostgreSQL. We will look at different types of relationships such as One to Many, One to One, and Many to Many relationships. We will also see how we can join our tables together that are constructed using these relationships.

## Importance of Relationships in SQL Databases

Relationships are a significant aspect of SQL-type databases, and it is what they are strong at. They are essentially the relationship goals of all the different databases. This is where the power of SQL databases comes in. Let us explore and see how we can create great relationships.

## One to One Relationships

The first type of relationship we will look at is the simplest: a One to One relationship. In a crow's feet diagram, One to One relationships are represented in a specific way. On one side, we have a table called `student`, and on the other side, a table called `contact`. These two tables are linked together using a 1:1 relationship, and they are linked by the field that is the `id`.

When you think of a One to One relationship, it means that there is one entry in the `student` table that maps to one entry in the `contact` table. Often, this is a way to modularize your database. For example, if you have a table with many columns, as the columns increase, your database becomes larger and more difficult to search. Many databases are optimized to have many records (rows), but they can struggle when you have too many fields (columns). Splitting a table using a One to One relationship can help.
