# Query Data Using SELECT, WHERE, and LIKE

## Introduction to Querying Data Using Postgres

In this lesson, we will explore how to query data using Postgres. Previously, we learned how to read and view data from our database. Now, we will dive deeper into the usage of the `SELECT` keyword in SQL and how to search through our database to find specific information for our applications.

The dataset we will use to practice our SQL skills contains the total amount of food produced by various countries in 2021, focusing on rice and wheat. You can download the file named `world-food.csv` from the current lesson resources.

We will import this data into a Postgres database by creating a table named `world_food`. The dataset includes nine countries with data on rice and wheat production measured in million metric tons. For example, the United States produces significantly more wheat than rice, while India produces more rice than wheat.

### Creating the `world_food` Table

To create the table, open the Query tool in pgAdmin and write the following SQL command:

```sql
CREATE TABLE world_food (
    id SERIAL PRIMARY KEY,
    country VARCHAR(45),
    rice_production FLOAT,
    wheat_production FLOAT
);
```

This command creates a table with an auto-incrementing `id` as the primary key, a `country` column with a maximum of 45 characters, and two floating-point columns for `rice_production` and `wheat_production`. After running this command, refresh the tables to see `world_food` listed.

### Importing Data from CSV

To import data into the `world_food` table, right-click the table, select "Import/Export Data," and choose the downloaded CSV file. Ensure "Import" is selected and that the "Header" option is checked. Since the CSV does not include an `id` column, exclude it from the columns to import, allowing Postgres to auto-generate it.

After importing, you will see nine rows with auto-generated IDs from 1 to 9, along with the corresponding country names and their rice and wheat production values.

## Using the SELECT Statement

The simplest way to retrieve data is to select all columns from a table using the asterisk (`*`). For example, to select everything from the `world_food` table, use:

```sql
SELECT * FROM world_food;
```

This query returns all rows and columns from the table.

### Selecting Specific Columns

To select only one column, specify the column name instead of the asterisk. For example, to select only the `country` column:

```sql
SELECT country FROM world_food;
```

To select multiple columns, separate the column names with commas. For example, to select `country` and `wheat_production`:

```sql
SELECT country, wheat_production FROM world_food;
```
