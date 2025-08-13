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
