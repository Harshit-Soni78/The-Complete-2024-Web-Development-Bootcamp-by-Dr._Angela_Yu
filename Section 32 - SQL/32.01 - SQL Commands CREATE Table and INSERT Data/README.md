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

Let's write the SQL code to create the `products` table. We start with the keywords `CREATE TABLE`, followed by the table name `products`, and then define the columns inside parentheses.

The first column is `id`, which will be of type `INT` (integer). This column will serve as the unique identifier or primary key for the products table, allowing each row to be uniquely identified.

Next, we define the `name` column, which will store the product name as a string. In SQL, we specify the column name followed by its data type separated by a space, without colons.

The third column is `price`, which will store the monetary value of the product. For this, we use the `MONEY` data type, which formats values with commas and decimal places appropriate for currency.

Finally, we need to designate the primary key for the table. The primary key uniquely identifies each record. We specify this by adding `PRIMARY KEY (id)` after the column definitions.

Additionally, we add the `NOT NULL` constraint to the `id` column to ensure that every record must have a value for `id`. This prevents records from being created without an identifier.

After writing the SQL code for the `products` table, verify that commas separate each column definition and that there are no colons. Then, execute the code to create the table.

Once the table is created, you can view it by right-clicking on `products` and selecting "Show table." Initially, the table will be empty.

To add data to the table, we use the `INSERT INTO` statement. For example, to add a product with `id` 1, `name` "Pen", and `price` 1.20, we write an SQL insert statement.

The syntax for inserting data is:

```sql
INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
```

Alternatively, if you provide values for all columns in order, you can omit the column list.

Let's insert the product data into the `products` table by specifying the values directly.

The SQL command is:

```sql
INSERT INTO products VALUES (1, 'Pen', 1.20);
```

Note that string values must be enclosed in single quotes.

After running this command, the product record will be added to the table. You can verify this by viewing the `products` table again.

If you want to add a product but do not have all the values, such as the price, you can specify only the columns for which you have data. For example, to add a product with `id` 2 and `name` "Pencil" but no price, you write:

```sql
INSERT INTO products (id, name) VALUES (2, 'Pencil');
```

This will insert a record with a NULL value for the price column.

Viewing the table after this insertion will show the second record with an `id` and `name`, but the `price` will be NULL.

Note that the `id` column cannot be NULL due to the `NOT NULL` constraint. Attempting to insert a record without an `id` will result in an error.

For example, the following command will fail:

```sql
INSERT INTO products (name, price) VALUES ('Rubber', 1.30);
```

Because the `id` is not provided and cannot be NULL.

This validation ensures that the database remains well-structured and consistent with the defined schema.

In summary, this lesson demonstrated how to create a new table using SQL and how to insert data into it. The next lesson will cover how to read and search data within the table.

## Key Takeaways

- SQL uses keywords like CREATE, TABLE, INSERT INTO, and PRIMARY KEY to manage databases.
- The CREATE TABLE statement defines the structure of a table including column names and data types.
- The PRIMARY KEY constraint uniquely identifies each record and cannot be NULL.
- Data can be inserted into tables using the INSERT INTO statement, specifying columns and values as needed.
