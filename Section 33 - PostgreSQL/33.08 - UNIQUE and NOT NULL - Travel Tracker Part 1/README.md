# Travel Tracker Part 1: Building a Country Tracking App with Node.js and Postgres

## Introduction to the Travel Tracker Exercise

In this exercise, we will build a website that allows us to track all the countries we have visited. The starting file for this lesson is named `8.3 Travel Tracker.zip`. Unzip it and use `npm install` to install all required modules.

## Application Overview

The goal is to create an app where we can enter countries we have visited. This app is backed by a Postgres database. We will enter data into the database, and our front-end will display the countries in a visually appealing way.

## Preparing the Project

Ensure you have extracted the files and installed all Node modules. Open the project in VS Code. Inside `index.js`, you will find a basic Express app skeleton.

## Creating the Database Table

We will create a table named `visited_countries` with two columns:

- `id`: SERIAL, PRIMARY KEY
- `country_code`: CHAR(2), NOT NULL, UNIQUE

This ensures that each country code is unique and not empty, preventing duplicate or null entries.

```sql
CREATE TABLE visited_countries (
    id SERIAL PRIMARY KEY,
    country_code CHAR(2) UNIQUE NOT NULL
);
```

## Manually Adding Data

We will manually add data to the `visited_countries` table using pgAdmin. Leave the `id` field empty to use the default value. Enter a two-letter country code (e.g., `FR` for France) in the `country_code` field, as it cannot be null.

```text
FR
GB
US
```

## Saving Data and Primary Key Behavior

After adding the country codes, click the save button to persist the data. The `id` values are automatically generated and must be unique. If a previous entry was rejected, its `id` may be skipped, but uniqueness is maintained.

## Displaying Countries in the Application

With data in the `visited_countries` table, the next step is to display these countries in the application. Run `nodemon solution1.js` and visit `localhost:3000` to see the countries highlighted on the map.
