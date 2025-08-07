# Travel Tracker Part 3

## Introduction to Optional Improvements

In this lesson, we will explore some optional improvements to our Travel Tracker app. These enhancements address edge cases that can cause the app to hang or crash, such as when a user types in a country that does not exist or tries to add a country that has already been added.

Currently, if a user inputs a non-existent country and clicks ADD, the app either hangs or crashes, which is undesirable. Instead, we want to handle such errors gracefully by updating the input placeholder to display a message like "Country name does not exist, try again." Similarly, if a user attempts to add a country that has already been added, such as Colombia, we want to display an error message stating "Country has already been added, try again."
