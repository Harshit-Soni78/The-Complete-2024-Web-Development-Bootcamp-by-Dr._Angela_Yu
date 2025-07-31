# SQL Commands: DELETE

In the previous lesson, we explored how to update records in our tables using the SQL UPDATE statement.

## Introduction to DELETE Statement

In this lesson, we will focus on the last letter of CRUD, which is DELETE. To delete records from a table, we use the following syntax:

```sql
DELETE FROM <table_name> WHERE <condition>
```

For example, if we want to delete the record for a pencil because we no longer sell pencils in our shop, we can write:

```sql
DELETE FROM products WHERE name = "Pencil"
```

However, a better practice is to use the unique identifier of the record, such as its id:

```sql
DELETE FROM products WHERE id = 2
```

### Important Caution

Be very careful not to run a DELETE statement without a WHERE clause, as this will delete all records in the table. For example, running:

```sql
DELETE FROM products
```

will remove all data from the products table, which is usually undesirable.

Always double-check your DELETE statements before executing them.

After executing the DELETE statement with the appropriate WHERE clause, our products table will have only one entry left.

Through this process, you have seen how Structured Query Language (SQL) allows us to Create, Read, Update, and Delete data from our tables.

