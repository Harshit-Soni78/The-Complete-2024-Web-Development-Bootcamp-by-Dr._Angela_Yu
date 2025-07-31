# Updating Single Values and Adding Columns in SQL

## Introduction to Updating Records in SQL

In the previous lesson, we explored how to read data from a database and select specific pieces of data based on certain criteria. In this lesson, we will address the 'U' in CRUD, which stands for updating records in your database.

Currently, if we examine the entire products table, we notice that the price for our pencil is set as Null. This is because, when we created this record, we did not have a price yet and left it blank.

If we want to update that record to provide a value for the price of the pencil, we can use the UPDATE statement.

We use the UPDATE keyword, specify the table we want to update, and then SET the values we want to change. We can also specify a particular condition to update only the records we are interested in.

```sql
UPDATE products SET price = 0.8
```

This statement is dangerous because, if executed as is, it will set the price of every product in the table to 0.8. It is essential to specify the WHERE clause so that only the intended record is updated.

```sql
UPDATE products SET price = 0.8 WHERE id = 2
```

Now, this statement will find the specific record with id equal to 2 and set its price to 0.8. After running this, if we view our products table again, we can see that the pencil now has a price, and there are no more null values.

## Adding a New Column to a Table

Suppose we want to change the table instead of a particular record. For example, in our products table, if we want to keep track of the stock of each product, we need to add a new column. In SQL, this requires altering the table.

```sql
ALTER TABLE products ADD stock INTEGER
```

After executing this command and viewing the products table, we now have an extra column at the end, but both records have Null values for stock.

## Challenge: Updating Stock Values

As a challenge, update both records so that they have appropriate stock values. According to the table, there are 32 pens and 12 pencils to sell.

```sql
UPDATE products SET stock = 32 WHERE id = 1
```

```sql
UPDATE products SET stock = 12 WHERE id = 2
```

After running these statements, the Pen now has a stock value of 32, and the Pencil has a stock value of 12. Our table is now complete without any null values.

## Reflections on Updating Values

It can be tedious to update values, especially if you did not account for certain columns when creating the schema.
