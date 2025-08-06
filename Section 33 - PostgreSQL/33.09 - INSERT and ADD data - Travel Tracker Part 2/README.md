# INSERT and Add Data | Travel Tracker Part 2

## Introduction

In the previous lesson, we worked on our travel tracker application and learned how to use SELECT in PostgreSQL. We completed the first part of our application by applying those concepts. Now, we will proceed to the second part of the application, which involves learning how to use INSERT in our PostgreSQL and Node back-end.

We will continue using the data from our rice and wheat production table. If you have not noticed by now, I am quite obsessed with food. For example, rice is a staple, and even sushi rice in Europe is often produced in Italy. Sometimes, I even snack on rice straight from the rice cooker. However, let us continue with programming.

## Using INSERT to Add Data

We have a table of data from various countries and their rice and wheat production. We will use this table to learn how to add data into it. The key command here is INSERT. You have seen this previously when we looked at SQL in the last module. The goal is to take the table called `world_food` and insert a new row for Italy. The country name is Italy, with 1.46 million tons of rice production and 7.3 million tons of wheat production.

Italy is surprisingly a large producer of rice, and most sushi rice in Europe is produced there. We will insert this data into our table. The pattern for the INSERT command is as follows:

```sql
INSERT INTO world_food (country, rice_production, wheat_production) VALUES ('Italy', 1.46, 7.3);
```

The columns in the parentheses specify which columns to insert into, and the VALUES are provided in the same order. Strings in SQL should be enclosed in single quotes. Once you have your columns and values, end the command with a semicolon. After running the command, you can view your data and see that the new row has been inserted.

Previously, we used pgAdmin to insert rows, but now we need to know how to do it using SQL because we will need to insert new data whenever a user adds a new country they have visited. This must be done programmatically.
