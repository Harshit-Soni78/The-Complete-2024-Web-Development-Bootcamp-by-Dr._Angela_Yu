# SQL Commands: READ, SELECT, and WHERE

## Introduction to Reading Data in SQL

In the previous lesson, we explored how to create new tables using SQL and how to insert data into those tables. In this lesson, we will focus on the next part of CRUD operations, which is 'Read'. Specifically, we will learn how to read data from your tables.

The most commonly used keyword for reading data in SQL is the `SELECT` keyword. This keyword allows you to retrieve data from your database tables.

For example, when you right-click on a table and choose to show the table, the following syntax appears automatically:

```sql
SELECT \* FROM products
```

Here, `products` is the table name, and the asterisk (`*`) is a wildcard that means "select everything" from the `products` table. This is why all data in the table is displayed.

If you want to retrieve only specific columns, you can replace the asterisk with the column names. For example:

```sql
SELECT name, price FROM products
```

Running this query will return only the `name` and `price` columns from the `products` table, excluding other columns such as `id`.

### Filtering Rows with WHERE Clause

To retrieve particular rows from your database, you use the `WHERE` keyword to specify search conditions. For example, to select the row where the `id` is 1, you would write:

```sql
SELECT \* FROM products WHERE id = 1
```

This query returns the single record where the `id` equals 1.

The `WHERE` clause can include various conditions such as equality, greater than, less than, between, and pattern matching with `LIKE`. For example:

```sql
WHERE Country = 'Mexico'
WHERE customerID = 1
```

These conditions help you filter and select the specific data you need from your tables.

In summary, the `SELECT` statement combined with optional column selection and the `WHERE` clause allows you to read and filter data from your SQL database effectively. You will frequently use these statements when working with SQL databases.

