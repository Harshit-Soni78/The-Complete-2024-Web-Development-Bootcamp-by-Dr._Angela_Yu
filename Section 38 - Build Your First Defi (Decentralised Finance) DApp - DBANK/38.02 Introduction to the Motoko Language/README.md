# Introduction to the Motoko Language

## Getting Started with Motoko and the Internet Computer

To begin developing for the Internet Computer, the first step is to create a new project. Change into the directory where you want to develop. For example, if your folder is named `ic-projects` in your root directory, navigate to it using the terminal.

Once inside the desired directory, you can create a new Internet Computer project using the dfx SDK. The command to do this is:

```bash
    dfx new dbank
```

Replace `dbank` with your preferred project name. After running this command, the SDK will set up all required files and folders. This process may take a few minutes depending on your computer's speed.

When the setup is complete, you will see the dfinity logo and confirmation that the project is ready. Change into your new project directory:

```bash
    cd dbank
```

Inside the project, you will find several files and folders, including a `readme`, a `.git` directory, a `src` folder for your code, and various configuration files. The most important is the `src` folder, where you will write all your code.

## Opening the Project in a Code Editor

Rather than working solely in the command line, open the project in your code editor, such as VS Code. Use the editor's Open function to select your project folder.

Within the `src` folder, you will find a `main.mo` file. This is the Motoko file you will work with. There may be some pre-existing code, which you can delete to start from scratch and learn each line's purpose.

## Creating an Actor in Motoko

The first step is to create the class that will hold your canister. In Motoko, this is called an `actor`. Use the `actor` keyword and give the class a name, such as `DBank`, then open a set of brackets.

```mo
    actor DBank {

    }
```

With these lines, you have created a new canister. Inside this actor, you can use all the code you already know.

## Variables and Naming Conventions in Motoko

Create a variable to hold the current value of money in the bank. For example, start with $300. Each line must end with a semicolon, similar to JavaScript. Use the `var` keyword to create a variable and follow lower camel case for variable names. Use upper camel case for actor names, module names, and type names.

```mo
    var currentValue = 300;
```

If you want to read more about Motoko's style guide, refer to the official documentation. While style does not affect code execution, it is good practice to follow conventions when learning a new language.

## Variable Assignment and Reassignment

A variable in Motoko works similarly to variables in other languages. It is a container that can store data, such as the number 300. Since it is a variable, its value can change. To change the value, use the colon equals operator (`:=`) instead of a single equals sign.

```mo
    currentValue := 100;
```

At this point in the code, `currentValue` would be equal to 100.

## Debugging and Printing in Motoko

To inspect and debug your code, use the Debug module from the Motoko Base Library. Import the module using the `import` keyword, specifying the path to the Debug module.

```mo
    import Debug "mo:base/Debug";
```

Now, you can use the `Debug.print` function to output text to the terminal during local development.

```mo
    Debug.print("hello");
```

To run your code, deploy your canister. First, start the local environment:

```bash
    dfx start
```

Then, in another terminal (without stopping the first process), deploy your canister:

```bash
    dfx deploy
```

After deployment, you will see the output from your print statement in the terminal.

## Printing Variable Values

If you try to print a variable such as `currentValue` directly using `Debug.print`, you will encounter a type mismatch error. The `print` function expects text, but `currentValue` is of type `nat` (natural number). To print non-text values, use the `debug_show` function.

```mo
    Debug.print(debug_show(currentValue));
```

Deploy again to see the output. The terminal will show the value of `currentValue` at that point in the code.
