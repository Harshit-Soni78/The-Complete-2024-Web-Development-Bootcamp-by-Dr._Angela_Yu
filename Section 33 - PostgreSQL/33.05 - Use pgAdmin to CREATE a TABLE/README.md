# Use pgAdmin to CREATE a TABLE

Let's try this out for real. In this lesson, you'll find a download for a file called `capitals.csv`. CSV stands for Comma Separated Values. If you open this file inside VS Code, you'll see that each line contains a separate record, and each record's fields are separated by commas, effectively representing distinct columns.

The first line of our CSV is the header row, defining the name of each field. There are three fields: `id`, `country`, and `capital`. Each record's capital corresponds to the country listed prior. For example, the capital of Afghanistan is Kabul, the capital of Albania is Tirana, and so on. This CSV contains all the countries in the world.

We are going to create a table for this data in our PostgreSQL database. Download the CSV file and have it handy because we will refer to this data to figure out how to create our table.

You will notice that the `id` field serves as a perfect primary key because all IDs are unique. The `country` field contains the name of the country, which is text. We can define it as `VARCHAR(45)` since all country names in this list have fewer than 45 characters. Similarly, the `capital` field is also text and can be defined as `VARCHAR(45)` because all capital names are under 45 characters.

Once we have examined the data and defined each data type, we are ready to write SQL code inside pgAdmin to create a table.

Open pgAdmin. When you first open it, it might ask you to set a global password. This password is for accessing pgAdmin itself. It is important to write this down because there are many passwords involved in databases, and it can be confusing to keep track of them.

After opening pgAdmin, expand the servers on the left and double-click on the PostgreSQL 15 database. It will ask you for a password. This password is the one you defined when you installed PostgreSQL. Remember, during installation, the default username is `postgres`, and you had to set a password. Enter that password here.

Once logged in, expand the `Databases` section. By default, there is a database called `postgres`. We will create our own database instead.

Right-click on `Databases` and select `Create Database`. Give your database a name; for example, `world`. The owner will be the default user `postgres`. Click Save.

Now you have two databases: `postgres` and `world`. Expand `Schemas` and then `Tables` inside the `world` database. You will see there are currently no tables.

Let's create a table.

With the `world` database selected, click on the Query Tool. This is where you can write SQL code.

To create a table, write `CREATE TABLE` followed by the table name. For example, `capitals`. Add parentheses after the table name, and remember to end the statement with a semicolon. Unlike JavaScript, SQL requires a semicolon at the end of each statement.

Now define the fields inside the parentheses.

The first field is `id`. We will give it the `SERIAL` data type. Although we will import data that already has IDs defined, it is good practice to define primary keys as `SERIAL` in PostgreSQL. This way, if you add new entries later, the IDs will auto-increment automatically.

Next, add the `PRIMARY KEY` constraint to the `id` field. This constraint ensures that the `id` is unique for every record.

Then add the `country` field as `VARCHAR(45)` and the `capital` field also as `VARCHAR(45)`. Remember, in SQL, all fields except the last one should end with a comma. The last field should not have a trailing comma.

Here is the SQL code to create the `capitals` table:

```sql
CREATE TABLE capitals (
    id SERIAL PRIMARY KEY,
    country VARCHAR(45),
    capital VARCHAR(45)
);
```

Run this code. If successful, you will see a message saying "Query returned successfully." This means the table has been created.

To see the table, right-click on `Tables` and click `Refresh`. You should see the `capitals` table.

Right-click on `capitals` and select `View/Edit Data` > `All Rows`. The table will open, but it will be empty because we have not imported any data yet.

Notice that the Query Tool automatically changes to a `SELECT` statement to show all rows ordered by `id` ascending.

To import data from the `capitals.csv` file into the table, right-click on the `capitals` table and select `Import/Export Data`.

Make sure `Import` is selected. Click the folder icon to select the file path to your `capitals.csv` file.

Leave the format as CSV. In the options, ensure the checkbox next to `Header` is checked. This tells PostgreSQL that the first line in the CSV is the header and not data.

In the `Columns` section, you should see the columns `id`, `country`, and `capital` automatically imported from the CSV header. It is important that these column names match the table's column names exactly.

Click OK to start the import process. If successful, you will see confirmation messages indicating the process completed.

If you encounter errors, such as mismatched column names, you can right-click the table, select `Properties`, go to the `Columns` tab, and edit the column names to match the CSV headers. Save the changes and try importing again.

After a successful import, right-click the table, click `Refresh`, then `View/Edit Data` > `All Rows` to see the imported data.

Now the table contains all the countries and their capitals from the CSV file.

In the next lesson, we will use this data to build a World Capitals Quiz. Before that, I have created another dataset for you to practice creating a table and importing data.

Download the file called `flags.csv`. Open it in VS Code to see the data format. It is also a CSV file with a header containing `id`, `name`, and `flag`.

The `flag` field contains emojis, which are UTF-8 encoded text. You can store this data as `VARCHAR`, but I recommend using the `TEXT` data type because it handles UTF-8 better and allows you to try a different data type.

Pause the video now and try creating a table called `flags` in your PostgreSQL database. Add the fields `id`, `name`, and `flag` with appropriate data types, then import the `flags.csv` file into that table.

Hopefully, you will have another table with all the data of each country and their flags.

Here's a reminder of how to create the `flags` table using SQL:

```sql
CREATE TABLE flags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(45),
    flag TEXT
);
```

Run this code to create the table. Then refresh the `Tables` section to see the new `flags` table.

You might have noticed that pgAdmin also allows creating tables via a graphical interface by right-clicking on `Tables` and selecting `Create` > `Table`. You can add the table name and define columns by adding new rows.

However, typing out the SQL code is often quicker and better practice, especially as you learn SQL.

To import data into the `flags` table, right-click on it and select `Import/Export Data`. Make sure `Import` is selected. Change the file path to where you saved `flags.csv`.

Ensure the `Header` option is checked and verify that all three columns (`id`, `name`, `flag`) are listed.

Click OK to import the data.

After importing, right-click the `flags` table, select `View` > `All Rows` to see the data, including the flag emojis.

Hopefully, you managed to complete this exercise successfully.

In the next lesson, we will use these databases to read data and create an actual Quiz App.

See you there.

## Key Takeaways

- CSV files contain records separated by commas, with the first line often serving as a header defining field names.
- In PostgreSQL, the `SERIAL` data type is commonly used for primary key fields to auto-increment IDs.
- pgAdmin provides a graphical interface to create databases, tables, and import CSV data efficiently.
- Matching CSV headers with database column names is crucial for successful data import.
