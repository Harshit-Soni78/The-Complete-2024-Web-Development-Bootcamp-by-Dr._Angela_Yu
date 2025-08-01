# Understanding SQL Relationships, Foreign Keys and Inner Joins

## Introduction to SQL Relationships

Now that we have seen how to implement all of CRUD using SQL, the next topic to explore is relationships in SQL.

First, add the pencil record back into the table if it was deleted. Use the `INSERT INTO` statement, specify the table name, and then the values: (2, "Pencil", 0.8, 12). After running this, the table will have two records.

## Creating the Orders Table

Next, create a new table called `orders`. This table will have several fields:

- `id` (INT, NOT NULL)
- `order_number` (INT)
- `customer_id` (INT)
- `product_id` (INT)

The `customer_id` field will store the customer who made the order and will act as a foreign key referencing the `customers` table. Similarly, the `product_id` field will form a relationship with the `products` table.

Set the `id` field as the primary key for the `orders` table. You can also specify foreign keys. The foreign key links tables together and establishes the relationship. For example, in the `orders` table, if there is a person with id 3, the foreign key field indicates that this order was made by someone in the `customers` table with id 3. This allows retrieval of all data associated with that order.
