# Download and Configure the Skeleton Project

## Introduction

To begin building our custom token, first download the starting project from the current lesson's Course Resources. The file should be named `token.zip`.

Once downloaded, unzip the folder and open the project in Visual Studio Code.

The project is already set up for React development. It includes a `tsconfig.json` file and modified Webpack configurations. Additionally, dependencies have been added to the `package.json` file, which will be installed when running `npm install`.

Some assets, such as the favicon and React components, have also been created to facilitate development.

Essentially, this project consists of a React frontend paired with a blank Internet Computer Motoko backend. We will be working on both in the upcoming lessons.

To save time, the project includes some basic HTML and CSS so we can focus on the interesting parts: blockchain integration and writing JavaScript and Motoko code.

This project was inspired by Curve Finance, an automated market maker popular for exchanging stablecoins within the Web3 blockchain community.

Curve has a distinctive old-school, nineties design aesthetic reminiscent of an old Macintosh. This design inspired the frontend of our website, which we will call DSurv instead of Curve.

### Running the Project Locally

To view the project, we need to build and run it locally on `localhost`.

Open a new terminal and run `dfx start` to launch a local simulated ICP blockchain.

After the blockchain simulator starts, open another terminal window and run `npm install`.

This command installs all dependencies specified in the `package.json` file, including Dfinity modules and React dependencies.

The installation may take some time depending on your internet speed and computer performance.

During installation, you might see warnings about deprecated packages. These are minor and will not affect the functionality or security of the website.

For example, some Material-UI icons may have been renamed to MUI icons, but this will not impact our project.
