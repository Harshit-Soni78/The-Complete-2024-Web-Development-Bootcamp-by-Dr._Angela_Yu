# \[Windows Users\] Installation and Setup for Web3 Development

This lesson is designed for Windows users to install and set up the environment for Internet Computer development. Although the process is somewhat lengthy, I will guide you step by step through everything you need to do. By following the documentation linked in this lesson and watching the video beforehand, you should be able to complete the setup successfully. If there are any updates, the documentation will be revised accordingly.

## System Requirements

First, ensure that your system meets the necessary requirements. Open the Start menu and search for "System Information" to check your operating system version. You should be running at least Windows 10, version 2004 or above. You can verify this by looking at the version number; it should be 19041 or higher. Windows 11 or newer versions are also compatible.

Additionally, confirm that your system is 64-bit by checking the "System Type" field, which should display "x64". Unfortunately, 32-bit systems are not supported for this setup.

## Installing Windows Subsystem for Linux (WSL)

Next, search for PowerShell in the Start menu and open it as an administrator. This is crucial for the installation process.

Copy and paste the following command from the guideline documentation into PowerShell:

wsl --install

This command installs the Windows Subsystem for Linux, which provides a virtual Linux environment allowing you to run bash commands necessary for working with the Dfinity Internet Computer.

The installation may take some time. Once completed, it will indicate that the requested operation was successful. You must then restart your computer for the changes to take effect.

After restarting, a setup pane should appear prompting you to create a username and password for Ubuntu. Enter these credentials carefully; note that the password will not be displayed on the screen as you type. It is advisable to choose a simple password since you will use it shortly during further installations.

Once the Ubuntu setup is complete, open Windows PowerShell as an administrator again and run the command provided in the installation guide to verify the WSL installation. If you see "Ubuntu version 2" listed, you are ready to proceed.

## Installing Visual Studio Code

Navigate to the link provided in the installation guide to download the latest stable version of Visual Studio Code (VS Code). Run the installer, accept the agreement, and proceed with the default options. Ensure you select the option to add a desktop icon for quick access.

After installation, VS Code will launch automatically.
