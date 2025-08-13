# How to update and delete data & tables

In previous lessons, we covered creating, reading, and inserting data into databases. In this lesson, we will focus on the update and delete methods available for managing our database.

## ALTER, DROP, UPDATE, and DELETE Commands in Postgres

We will explore the `ALTER`, `DROP`, `UPDATE`, and `DELETE` commands in Postgres, which are essential for modifying database schemas and data.

### ALTER TABLE

The `ALTER` command is commonly used to change the schema of a table. The syntax begins with `ALTER TABLE` followed by the table name and the specific alteration command.

For example, to rename a table called `student` to `user`, you would write:

ALTER TABLE student RENAME TO user;

Another common use of `ALTER` is modifying a column within a table. For instance, to change the data type of a column, you can use:

ALTER TABLE table_name ALTER COLUMN column_name TYPE new_data_type;

An example is changing a column from `TEXT` to `VARCHAR(20)`:

ALTER TABLE contact_detail ALTER COLUMN telephone TYPE VARCHAR(20);

You can also add new columns using `ALTER TABLE` with the `ADD` command. For example, to add an `email` column of type `TEXT`:

ALTER TABLE contact_detail ADD COLUMN email TEXT;

### Applying Unique Constraints

Consider a table named `example` with three integer columns: `a`, `b`, and `c`. We can enforce a unique constraint on the combination of columns `a` and `c` to ensure their combined values are unique across rows.

This means that while `a` or `c` individually may have duplicate values, the pair `(a, c)` must be unique. For example, if one row has `(a=1, c=1)`, another row cannot have the same combination but could have `(a=1, c=2)`.

In practical applications, such as a Family Travel Tracker, a table `visited_countries` might store `user_id` and `country_code`. While multiple users can visit the same country, the combination of `user_id` and `country_code` must be unique to avoid duplicate entries.

To add a unique constraint to existing columns, use the `ALTER TABLE` command with `ADD CONSTRAINT`. For example:

ALTER TABLE visited_countries ADD CONSTRAINT unique_user_country UNIQUE (user_id, country_code);

Attempting to insert duplicate combinations after applying this constraint will result in an error, preventing duplicate data entries and allowing the application to notify users accordingly.

### DROP TABLE

The `DROP TABLE` command deletes an entire table from the database. Use this command with caution as it permanently removes the table and its data.

Example:

DROP TABLE IF EXISTS visited_countries;

This command is equivalent to right-clicking a table in pgAdmin and selecting delete.

### UPDATE Command

To modify specific data entries within a table, use the `UPDATE` command. The syntax includes specifying the table, setting new values for columns, and applying conditions to target specific rows.

Example:

UPDATE users SET name = 'Angelina' WHERE id = 1;

This updates the `name` column to "Angelina" for the user with `id` equal to 1.

### ORDER BY Clause

The `ORDER BY` clause sorts query results based on specified columns in ascending (`ASC`) or descending (`DESC`) order.

Example to sort users by `id` ascending:

SELECT \* FROM users ORDER BY id ASC;

To sort by the `name` column in descending order:

SELECT \* FROM users ORDER BY name DESC;

### DELETE Command

To remove specific rows from a table, use the `DELETE` command with a condition.

Example:

DELETE FROM visited_countries WHERE id = 6;

This deletes the row with `id` equal to 6 from the `visited_countries` table.

You can also specify multiple conditions:

DELETE FROM visited_countries WHERE user_id = 1 AND country_code = 'FR';

This deletes the entry where the user with `user_id` 1 has been to France (`country_code` 'FR').

Using these commands, you have comprehensive control over your Postgres database schemas and data, enabling you to manage projects effectively.

## Key Takeaways

- The `ALTER TABLE` command is used to modify table schemas, including renaming tables, changing column data types, and adding new columns.
- Unique constraints can be applied to combinations of columns to prevent duplicate data entries.
- The `DROP TABLE` command deletes entire tables from the database and should be used with caution.
- The `UPDATE` command modifies specific data entries in a table, while the `DELETE` command removes data rows based on conditions.
- The `ORDER BY` clause allows sorting query results in ascending or descending order based on specified columns.
