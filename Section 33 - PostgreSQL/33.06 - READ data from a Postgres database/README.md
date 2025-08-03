# READ Data from a Postgres Database

## Introduction

Now that we have created our tables and imported some data, or you may have created some data fields of your own, it is time to see how we can actually use that data in a real Node backend. We can power our project using data from our database.

## Capitals Quiz Application Overview

The project we are going to build as an example is a Capitals quiz. It is a quiz where you get a prompt for a country and you have to enter the name of the capital. We will normalize the casing and remove any blank characters the user adds, but essentially, we are checking whatever the user enters against what is in our database. If the user gets it right, they increase their score, until they get one question wrong, which becomes their maximum score.

## Fetching Data from Postgres

To get all of the data, the line of code we need to read from our SQL database is simply:

```sql
SELECT * FROM capitals
```

The SQL code is very simple and you have done this before. In order to implement it in our Node and Express backend, it takes a few more steps. We will use the pg NPM package, which simplifies things for us vastly. Once installed and imported, we can use it to create a new pg client, which connects to our database.
