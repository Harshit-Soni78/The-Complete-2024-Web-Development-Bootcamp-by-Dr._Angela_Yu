# SQL Commands: CREATE Table and INSERT Data

In the previous lesson, you learned about the advantages and disadvantages of SQL and NoSQL databases. However, the best way to understand is by trying it yourself. Let's create a database using a SQL-based system and observe how it works.

A valuable resource for SQL documentation is available at W3Schools. By visiting w3schools.com/sql, you can explore the syntax of Structured Query Language. This guide helps you become familiar with SQL, which is essentially a new programming language for database management.

SQL commands consist of keywords such as SELECT, FROM, CREATE, and TABLE, which are typically written in uppercase. Using SQL, you can create tables, manipulate them, update records, and delete data.

With any database, the primary operations you perform are Create, Read, Update, and Destroy, collectively known as CRUD. Becoming proficient in CRUD operations is essential for working effectively with any database system.

To practice SQL, you can use the online playground at sqliteonline.com. This environment allows you to experiment with SQLite databases and learn the query language hands-on.

In this playground, there is a pre-existing table named `customers` with two records. The table has four columns: `id`, `first name`, `last name`, and `address`. You can view the table structure by right-clicking on `customers` and selecting "Show table."

Our first task is to recreate the `Products` table structure that was discussed in the previous lesson, but this time using actual SQL code.

Whenever working with new technology, the best approach is to consult the documentation. On the left pane of the SQLite playground, you can find various SQL commands. For creating tables, refer to the "SQL Create Table" section, which provides the syntax for creating tables.

The syntax for creating a table is:

```sql
CREATE TABLE table_name ( column1 datatype, column2 datatype, ... );
```

Here, `CREATE TABLE` are keywords written in uppercase, followed by the table name and a list of columns with their data types enclosed in parentheses and separated by commas.

