# \[Mac Users\] Installation and Setup for Web3 Development

## Introduction to Setup for Internet Computer Development

To begin development on the Internet Computer, it is essential to install the required tools and perform the necessary setup. A comprehensive list of these steps is provided in a Google document linked within this Udemy lesson. It is highly recommended to follow along with this document, as it contains commands to copy and paste for convenience.

If you are a Windows user, you may skip this video and proceed to the next lesson, which contains Windows-specific instructions.

### Installing Node.js

The first prerequisite is Node.js. This course has covered Node.js extensively, so you likely already have it installed. If not, visit the official Node.js website and download the Long-Term Support (LTS) version, which is crucial for compatibility with the Internet Computer. Avoid the latest feature version.

To verify your Node.js installation, run the command:

`node --version`

Ensure the version is 16 or higher. If it is lower, download and install the latest LTS version.

### Installing DFX

DFX is the tool that enables local Internet Computer development, deployment, and code execution. To install DFX on a Mac, open the Terminal application by searching for "Terminal" via Spotlight.

Copy the entire installation command provided (ensure no characters, such as double quotes, are omitted) and paste it into the terminal. Then press Enter to begin the installation.

The installation process may take some time. Once completed, verify the installation by running:

`dfx --version`

You should see a version number, such as 0.9.3.

### Installing Visual Studio Code and Motoko Extension

Next, download and install Visual Studio Code (VS Code) if you have not done so already. VS Code is chosen because it supports Motoko development, which is essential for Internet Computer projects.

After installing VS Code, install the Motoko extension. You can do this by searching for "Motoko" within the VS Code extensions marketplace or by visiting the provided link. Ensure you select the extension named "Motoko" from the Dfinity Foundation, as there are similarly named extensions.

With these tools installed, you are ready to begin building your first Internet Computer application.

## Creating a Project Folder

Before starting development, create a dedicated project folder to organize your Internet Computer projects. For example, create a folder named `ic-projects` in your user root directory.

To do this on a Mac:

- Go to your desktop.
- Press Command + Up Arrow to navigate to your user root folder.
- Create a new folder named `ic-projects`.

Open Terminal and navigate to this folder by typing:

`cd` followed by dragging the folder into the terminal window, then press Enter.

### Creating a New Internet Computer Project

Within the `ic-projects` folder, run the following command to create a new Internet Computer project:

`dfx new hello_world`

This command generates a new project with sample code, functioning as a "Hello World" application. When the process completes, you will see the Dfinity logo in the terminal.

Next, open VS Code, select "Open", and navigate to the newly created project folder inside `ic-projects`. Open this folder to view the generated code, which includes Motoko, HTML, and JavaScript files.

## Deploying and Running the Project

To deploy and run your project locally, open a new terminal window and start the local Internet Computer network by running:

`dfx start`

Wait until you see a message indicating the server is running.

Then, open another terminal window and deploy your project with:

`dfx deploy`

This process may take some time. Once deployment completes, start the server by running:

`npm start`

The terminal will display the URL where your project is running. Copy and paste this URL into your browser to access your Internet Computer decentralized application (DApp).

### Testing the Application

On the web page, enter your name into the input field and click the button. The application should greet you by name, confirming that the setup and deployment were successful.

If you reach this point, all installation and setup steps have been completed correctly, and you are ready to begin writing code for the Internet Computer.

Windows users should skip the next lesson and proceed to start building their first Internet Computer project.

## Key Takeaways

- Installed Node.js LTS version to ensure compatibility with the Internet Computer.
- Installed DFX to manage local Internet Computer development and deployment.
- Set up Visual Studio Code with the Motoko extension for coding.
- Created and deployed a sample Internet Computer project locally to verify setup.
