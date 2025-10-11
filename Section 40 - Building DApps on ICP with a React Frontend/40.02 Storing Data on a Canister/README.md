# Storing Data on a Canister

## Introduction

In this lesson, we have created a new Internet Computer decentralized application and ensured the frontend is linked and working. The next step is to persist the data that the user types in and determine how to implement the backend using Motoko.

If you have not managed to get the app running on your localhost, return to the previous lesson and ensure it is up and running. Otherwise, proceed if you see the Keeper app running with the frontend functioning.

## Setting Up the Motoko Backend

Close unnecessary files and open `main.mo`. The template contains a "Hello world" code, which can be deleted. We will create our actor, which is our canister, from scratch. The actor will be named `Dkeeper` for consistency, but you may use any name for your own projects.
