# Storing Data on a Canister

## Introduction

In this lesson, we have created a new Internet Computer decentralized application and ensured the frontend is linked and working. The next step is to persist the data that the user types in and determine how to implement the backend using Motoko.

If you have not managed to get the app running on your localhost, return to the previous lesson and ensure it is up and running. Otherwise, proceed if you see the Keeper app running with the frontend functioning.

## Setting Up the Motoko Backend

Close unnecessary files and open `main.mo`. The template contains a "Hello world" code, which can be deleted. We will create our actor, which is our canister, from scratch. The actor will be named `Dkeeper` for consistency, but you may use any name for your own projects.

### Defining the Note Data Type

Inside the new actor, we will create a new data type called `Note`. This data type represents the kind of data to be stored in each note. The Note type will have two fields: a title and content, both of type `Text`.

```mo
    type Note = {
      title : Text;
      content : Text;
    };
```

Add the `public` keyword to the type definition so it can be accessed from JavaScript as well.

```mo
    public type Note = {
      title : Text;
      content : Text;
    };
```

### Creating the Notes List

Next, create a variable called `notes` of type `List<Note>`. This is similar to arrays in JavaScript but with some differences. The list will start as empty using `List.nil<Note>()`.

```mo
    import List "mo:base/List";

    var notes : List.List<Note> = List.nil<Note>();
```

If you see an error about an unbound variable `List`, import it from the Motoko base library as shown above.

## Creating the createNote Function

Now, create a public function called `createNote`. This function will accept two parameters: `titleText` and `contentText`, both of type `Text`. It will create a new Note and add it to the notes list.

```mo
    public func createNote(titleText : Text, contentText : Text) : async () {
      let newNote : Note = {
        title = titleText;
        content = contentText;
      };
      notes := List.push(newNote, notes);
      Debug.print(debug_show(notes));
    };
```

The `List.push` function adds the new note to the beginning of the list. Unlike JavaScript arrays, this prepends the item. To update the list, assign the result back to `notes` using the `:=` operator. Import the Debug library to print the notes list for verification.

```mo
    import Debug "mo:base/Debug";
```

## Linking Motoko with JavaScript Frontend

To connect the Motoko backend with the JavaScript frontend, import the canister in your `app.jsx` file. The function `addNote()` in the frontend is triggered when the user presses the add button. This function needs to call `createNote` on the backend.

```js
import { dkeeper } from "../../../declarations/dkeeper";
```

The canister name is specified in `dfx.json`. The relative path ensures you access the correct declarations. After running `dfx deploy`, the bridge between JavaScript and Motoko is established, and the `createNote` function becomes available.

## Calling createNote from the Frontend

Inside the `addNote` function, call the Motoko function with the correct arguments. Ensure the order of arguments matches the Motoko function: first the title, then the content.

```js
dkeeper.createNote(newNote.title, newNote.content);
```

The attribute names `title` and `content` are defined in the frontend's `createArea` component. This ensures consistency between frontend and backend data structures.
