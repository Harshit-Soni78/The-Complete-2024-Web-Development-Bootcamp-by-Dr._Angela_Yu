# Understand how to use keys, Postgres types and keywords

## Introduction to Tables in Postgres

When learning SQL, we initially explored how to create tables using the SQL language. This time, we will examine some specifics related to creating tables using Postgres.

By now, you should be familiar with the concept of tables. Tables consist of vertical parts called columns, which represent individual fields.

Imagine a Roman building with many columns; these columns are always vertical and support the entire table. Each column represents a different field. For example, there could be a field called `name` and another called `age`. We can continue adding more fields to capture various characteristics of the data we want to store.

In this example, we are building a table of friends. As programmers, we might not have many friends, so it is useful to track them in a spreadsheet.

If you have many friends, you will have an even greater need to track them in a database. This example is simply to help us learn about databases and tables.

The other aspect of a table is the row, which is the horizontal part. Rows represent individual records of data.

Rows can be visualized as horizontal paddles or spoons. Each row corresponds to a particular entry. For example, if we have a friend named Angela who is 12 years old and is not very cool, this would be the first entry in the table. All data in this row corresponds to this particular person or entry.

We can have as many records as we want.

You might think tables are similar to Excel spreadsheets. However, one major downside of spreadsheets is that they become slow and difficult to load when they contain many records. For example, opening an Excel spreadsheet with over 5,000 records can be very slow.

This limitation is one reason people move to databases, which are extremely efficient at handling large amounts of data. Databases can manage millions of records without performance issues.

We have seen the concept of tables from spreadsheets, and now understand that a database consists of many tables tied together with relationships and rules that define their behavior.

Previously, we saw that we can create a table in SQL by writing code such as:

`CREATE TABLE` followed by the table name, for example, `friends`. Then, within parentheses, we define all the fields we want to create. The statement ends with a semicolon.

Inside the parentheses, each field is defined by its name followed by its data type. For example, fields could be `name`, `age`, and `is_cool`.

SQL data types are somewhat limited compared to Postgres data types, but common types include `CHAR` and `VARCHAR` for characters, and `BOOLEAN` for true or false values. We will discuss more data types shortly.

If we were to create this friends table in Postgres, the code might look like this:

- Use the keyword `CREATE TABLE`.
- Define the table name as `friends`.
- Inside parentheses, define the fields.

The first field is `id`, which is a `PRIMARY KEY`. This keyword ensures that entries in this field are unique and uniquely identify each record.

For example, you might have multiple friends named Angela, but searching by name alone could return many matches. The primary key allows you to uniquely identify each record.

This field cannot have duplicate values. Additionally, Postgres provides the keyword `SERIAL`, which means that when adding a new record, you do not need to specify the `id`; it will automatically increment from the previous record.

The next field is `name`, defined as `VARCHAR(50)`. This stands for variable character and limits the data size to a maximum of 50 characters. If the data is shorter, such as the name "Jack" with four characters, the storage size decreases accordingly, making it efficient.

In contrast, if the field were defined as `CHAR(50)`, it would allocate space for 50 characters regardless of the actual data length.

`VARCHAR` is a more efficient way of storing data compared to `CHAR`. Another common Postgres data type is `TEXT`, which is flexible and does not require defining a maximum size. It adjusts storage size to the actual data length.

Historically, `VARCHAR` with a defined maximum size was recommended for efficiency. However, modern tests with large databases show that `TEXT` does not take significantly more space or slow down performance substantially.

Using `TEXT` provides flexibility, especially when you might encounter data longer than expected. For example, some names can be very long, such as a friend with a 50-character surname.

Many now prefer `TEXT` for character data when flexibility is needed, though `VARCHAR(50)` remains a standard practice for known maximum lengths.

In this example, we assume no friend will have a name longer than 50 characters. When you know the maximum data size, using `VARCHAR` is appropriate. Otherwise, use `TEXT` for flexibility.

The next field is `age`, stored as an `INT` (integer), representing whole numbers.

Finally, the `is_cool` field is a binary option stored as a `BOOLEAN` data type, which can be true or false.

Postgres offers many more data types depending on your use case. For example, if you need to store very large auto-incrementing integers for primary keys, you can use `BIGSERIAL` instead of `SERIAL`.

For character varying data or dates, consult the Postgres documentation for detailed explanations of the available data types, including `TEXT`, `CHAR`, and `VARCHAR`.

## Key Takeaways

- Tables consist of vertical columns representing fields and horizontal rows representing individual records.
- Postgres offers various data types such as SERIAL for auto-incrementing primary keys, VARCHAR for variable-length strings, TEXT for flexible character storage, INT for integers, and BOOLEAN for true/false values.
- The PRIMARY KEY constraint ensures unique identification of each record in a table.
- Modern practices favor using TEXT over VARCHAR for character data when flexibility is needed, as the performance difference is minimal.
