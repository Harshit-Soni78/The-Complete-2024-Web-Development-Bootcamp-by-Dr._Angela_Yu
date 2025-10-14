# \[Windows Users\] Installation and Setup for Web3 Development

This lesson is designed for Windows users to install and set up the environment for Internet Computer development. Although the process is somewhat lengthy, I will guide you step by step through everything you need to do. By following the documentation linked in this lesson and watching the video beforehand, you should be able to complete the setup successfully. If there are any updates, the documentation will be revised accordingly.

## System Requirements

First, ensure that your system meets the necessary requirements. Open the Start menu and search for "System Information" to check your operating system version. You should be running at least Windows 10, version 2004 or above. You can verify this by looking at the version number; it should be 19041 or higher. Windows 11 or newer versions are also compatible.

Additionally, confirm that your system is 64-bit by checking the "System Type" field, which should display "x64". Unfortunately, 32-bit systems are not supported for this setup.

## Installing Windows Subsystem for Linux (WSL)

Next, search for PowerShell in the Start menu and open it as an administrator. This is crucial for the installation process.

Copy and paste the following command from the guideline documentation into PowerShell:

```bash
wsl --install
```

This command installs the Windows Subsystem for Linux, which provides a virtual Linux environment allowing you to run bash commands necessary for working with the Dfinity Internet Computer.

The installation may take some time. Once completed, it will indicate that the requested operation was successful. You must then restart your computer for the changes to take effect.

After restarting, a setup pane should appear prompting you to create a username and password for Ubuntu. Enter these credentials carefully; note that the password will not be displayed on the screen as you type. It is advisable to choose a simple password since you will use it shortly during further installations.

Once the Ubuntu setup is complete, open Windows PowerShell as an administrator again and run the command provided in the installation guide to verify the WSL installation. If you see "Ubuntu version 2" listed, you are ready to proceed.

## Installing Visual Studio Code

Navigate to the link provided in the installation guide to download the latest stable version of Visual Studio Code (VS Code). Run the installer, accept the agreement, and proceed with the default options. Ensure you select the option to add a desktop icon for quick access.

After installation, VS Code will launch automatically.

## Installing Required VS Code Extensions

From the installation guide, copy the link for the Motoko extension and paste it into your browser. Click "Install" in the browser to open the extension in VS Code. It is important to install the Motoko extension from the Dfinity Foundation, as there are multiple extensions with similar names.

Next, install the Remote WSL extension, which allows you to use the terminal inside VS Code connected to the WSL environment.

## Installing Node.js in WSL

Even if you have Node.js installed on Windows, you must install it again within WSL to ensure compatibility with Dfinity and related tools.

Open Ubuntu from the Start menu and run the Homebrew installation command provided in the installation guide. During installation, you will be prompted to enter the Ubuntu password you set earlier. Confirm the prompts by pressing Enter or typing 'Y' as required.

After Homebrew installation, follow the "Next Steps" instructions to add Homebrew to your PATH environment variable. This manual setup is necessary for Homebrew to function correctly.

Once Homebrew is configured, install Node.js version 16, which is the latest stable version compatible with the Internet Computer. Use the following command:

```bash
brew install node@16
```

If you encounter an error stating that "node16 is keg-only and was not symlinked," it means another Node.js version is installed. Resolve this by running:

```bash
brew link node@16
```

Verify the installation by typing:

```bash
node --version
```

The output should start with version 16.

## Installing DFX

Copy the DFX installation command from the installation guide and paste it into the Ubuntu terminal. This process may take some time as it fetches and installs the DFX package, which enables local Internet Computer development.

After installation, note the installation path provided. You need to manually add this path to your environment variables.

Open Notepad and paste the stub command from the installation guide, replacing the placeholder "REPLACE WITH YOUR INSTALLATION PATH" with the actual path you noted. Ensure there is no space between the colon and the first forward slash.

Copy the entire command and paste it back into the Ubuntu terminal to execute it.

Verify that the DFX path was added by running the echo command shown in the installation guide. Finally, check the DFX version:

```bash
dfx --version
```

You should see a version number such as 0.9.3, confirming successful installation.

## Creating and Running Your First Internet Computer Project

Open Visual Studio Code and click the green icon at the bottom left to select "New WSL Window." Close any previous windows if desired, ensuring the current window indicates "WSL: Ubuntu" and shows "Running in Ubuntu" on hover.

Open Ubuntu from the Start menu and create a directory named "ic-projects" by running:

```bash
mkdir ic-projects
```

Change into this directory:

```bash
cd ic-projects
```

Create a new Internet Computer project called "hello" by running:

```bash
dfx new hello
```

Allow the process to complete in the background. Once finished, you will see the Dfinity logo and can view the project files using:

```bash
explorer.exe .
```

This opens the folder in Windows Explorer, showing the "hello" folder with all template files generated by DFX.

Back in Visual Studio Code, open the "hello" project folder located inside "ic-projects." Inside the "src" folder, you will find the source files, including "main.mo," which is the Motoko file.

If syntax highlighting is not active for Motoko files, navigate to the Extensions tab. You may find the Motoko extension disabled. Click "Install in WSL: Ubuntu" to enable it in the WSL remote environment.

Return to "main.mo," and you should now see syntax highlighting applied. The project also contains HTML and JavaScript files.

## Deploying and Running the Project

Open the terminal menu in VS Code and select "New Terminal." Start the local Internet Computer by running:

```bash
dfx start
```

Once the local Internet Computer is running and you see the prompt, open a new terminal tab by clicking the split terminal button. Deploy the "hello" project with:

```bash
dfx deploy
```

After deployment completes and the prompt returns, start the server by running:

```bash
npm start
```

The terminal will display the URL where your project is running. Copy and paste this URL into your browser.

When the page loads, enter your name and click the button. You should see a greeting displayed, indicating successful installation and setup for Internet Computer development.

You are now ready to proceed to the next lesson and begin writing code for the Internet Computer.

## Key Takeaways

- Windows 10 version 2004 or above and 64-bit system are required for Internet Computer development.
- Windows Subsystem for Linux (WSL) must be installed and configured properly.
- Visual Studio Code with Motoko and Remote WSL extensions is essential for development.
- Node.js version 16 and DFX must be installed within WSL to work with the Internet Computer.
- The setup process includes creating a project directory, initializing a sample project, and deploying it locally using DFX.
