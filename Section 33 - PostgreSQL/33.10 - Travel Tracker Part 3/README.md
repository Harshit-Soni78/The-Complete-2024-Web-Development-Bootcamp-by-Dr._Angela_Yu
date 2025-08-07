# Travel Tracker Part 3

## Introduction to Optional Improvements

In this lesson, we will explore some optional improvements to our Travel Tracker app. These enhancements address edge cases that can cause the app to hang or crash, such as when a user types in a country that does not exist or tries to add a country that has already been added.

Currently, if a user inputs a non-existent country and clicks ADD, the app either hangs or crashes, which is undesirable. Instead, we want to handle such errors gracefully by updating the input placeholder to display a message like "Country name does not exist, try again." Similarly, if a user attempts to add a country that has already been added, such as Colombia, we want to display an error message stating "Country has already been added, try again."

## Implementing Error Handling with Try-Catch Blocks

To achieve this, we will modify our code by adding try-catch blocks around certain database queries. The first try-catch block will wrap the query that looks for the country_code from the countries table matching the user input. If this query fails, we will catch the error and render the home page again, passing an error message to be displayed in the input placeholder.

The second try-catch block will wrap the insertion query into the visited_countries table. If an error occurs here, it is likely because the country_code already exists, violating the UNIQUE constraint. We will catch this error and render the home page with an appropriate error message informing the user that the country has already been added.
