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

## Defining Foreign Keys in SQL

Set the `customer_id` field as a foreign key referencing the `customers` table and its primary key field, `id`. Do the same for the `product_id` field, referencing the `products` table and its `id` field.

If the concept of primary key and foreign key is unfamiliar, refer to documentation on W3Schools to understand how relationships are established in SQL using these keys.

After correcting any syntax errors, such as using the correct brackets, running the command will create the `orders` table. The table will have four fields: `id` (primary key), `order_number`, `customer_id` (foreign key), and `product_id` (foreign key). These foreign keys link the `orders` table with the `customers` and `products` tables.

## Inserting an Order Record

Create the first order record in the `orders` table. The values are:

- id: 1
- order_number: 4362
- customer_id: 2
- product_id: 1

In the `customers` table, the customer with id 2 is Angela Yu, and in the `products` table, the product with id 1 is a Pen. By establishing these relationships, it is possible to later join all relevant records and columns from all three tables as needed.

```sql
INSERT INTO orders VALUES (1, 4362, 2, 1);
```

Angela Yu has bought a Pencil; this is what the record represents.

## Using INNER JOIN in SQL

SQL provides a powerful feature called JOIN to combine tables. There are several types of joins, such as LEFT JOIN, RIGHT JOIN, and FULL JOIN, but the most commonly used is the INNER JOIN. INNER JOIN combines parts of tables where a particular foreign key matches.

To join the `orders` table with the `customers` table and select the order number, first name, last name, and address, use the following SQL statement:

```sql
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
```

Running this query produces a joined table with fields from both tables. This allows searching through all tables and records, matching up orders, and joining them in a new, more useful table. For example, to dispatch order number 4362, you can see who it is for and their address.

## Challenge: Join Orders with Products

Currently, the order is joined with the customer. As a challenge, join the order with the product it relates to. Change the code to join the `orders` table with the `products` table and select the order number, product name, price, and stock.

```sql
SELECT orders.order_number, products.name, products.price, products.stock
FROM orders
INNER JOIN products ON orders.product_id = products.id;
```

Running this query joins the `orders` table with the `products` table, creating a new table based on this INNER JOIN. This demonstrates the flexibility and power of SQL database relationships when assembling data from various tables.

## Resources and Practice

If there were any difficulties following the tutorial or if you want a copy of the completed table, a link to an online SQL version containing all data in the `orders`, `customers`, and `products` tables is available in the lesson resources. You can experiment with different code from W3Schools or elsewhere using SQLite.

## Key Takeaways

- SQL relationships are established using foreign keys that link tables together.
- The `orders` table uses foreign keys to reference both `customers` and `products` tables.
- INNER JOIN is used to combine data from multiple tables based on matching foreign and primary keys.
- SQL joins allow for flexible and powerful data retrieval across related tables.
