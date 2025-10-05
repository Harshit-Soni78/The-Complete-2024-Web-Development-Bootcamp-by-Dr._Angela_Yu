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
