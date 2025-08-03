# READ Data from a Postgres Database

## Introduction

Now that we have created our tables and imported some data, or you may have created some data fields of your own, it is time to see how we can actually use that data in a real Node backend. We can power our project using data from our database.

## Capitals Quiz Application Overview

The project we are going to build as an example is a Capitals quiz. It is a quiz where you get a prompt for a country and you have to enter the name of the capital. We will normalize the casing and remove any blank characters the user adds, but essentially, we are checking whatever the user enters against what is in our database. If the user gets it right, they increase their score, until they get one question wrong, which becomes their maximum score.
