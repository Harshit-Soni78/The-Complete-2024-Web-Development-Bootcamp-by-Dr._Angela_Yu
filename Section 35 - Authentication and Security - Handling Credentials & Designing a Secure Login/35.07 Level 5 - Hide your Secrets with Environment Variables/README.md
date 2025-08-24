# Level 5 - Hide your Secrets with Environment Variables

## Introduction to Environment Variables

In this lesson, the concept of environment variables is introduced. Environment variables are not primarily about keeping user data safe, but about keeping your own data secure.

## The Importance of Keeping Secrets Safe

Previously, when creating a session, an encryption key or secret was required. Keeping that secret in your `index.js` file, which is often uploaded to GitHub or placed on a server, makes it very easy for that information to be leaked. People can crawl GitHub looking for secrets and API keys to exploit. There are many stories of developers accidentally publishing AWS keys on GitHub, resulting in significant financial loss, such as a $3,000 AWS bill. While some are lucky to get refunds, not everyone is as fortunate. These stories highlight the importance of keeping secrets and API keys off the internet, where they are publicly searchable and can be stolen.

## Why Use Environment Variables?

For an app to work, secrets are needed to encrypt the database. When collaborating or using version control, you may need to publish your code. The way developers solve this is by using environment variables. There are two main use cases for environment variables:

- **Convenience:** When deploying large applications, the process is complicated. Environment variables allow you to change certain variables without modifying the codebase.
- **Security:** It is not a good idea to store authentication keys or API keys in the same place as your code. Environment variables allow you to separate sensitive information from your codebase.

## What Are Environment Variables?

Environment variables are essentially a very simple file where sensitive variables, such as encryption keys and API keys, are kept. In this lesson, the use of the popular package `dotenv` is demonstrated. The number of weekly downloads shows how heavily developers depend on this module to keep secrets off the internet and secure.

## Setting Up Environment Variables with dotenv

To implement environment variables in your project and keep secrets safe, download and extract the folder called `9.4 Environment Variables`. Inside `package.json`, the package used is `dotenv`. If not already there, stop your server, navigate to this module, and run the following command to install the package:

```bash
npm install
```

## Creating the .env File

After installing, the next step is to move the secret out of `index.js` by creating a `.env` file at the top level of your project. This file should only have the extension `.env`. If done correctly, a gear icon may appear in your editor (such as VS Code with the vscode-icons extension).

```bash
SESSION_SECRET="your_secret_string"
```

The format for environment variables is as follows:

- The variable name is in all caps, words separated by underscores.
- There is no constructor like `const` or `var`.
- The value is a string enclosed in double quotes.
- No spaces around the equal sign.
- Each variable is on a new line, with no commas or semicolons.

## Accessing Environment Variables in Code

After saving the `.env` file, return to `index.js`. Replace the secret with the following code to access the environment variable:

```js
process.env.SESSION_SECRET;
```

To load the `.env` file into the environment, import and configure dotenv as follows:

```js
const env = require("dotenv");
env.config();
```

Now, running your code will work as before, but the secret is no longer visible in `index.js`.

## Using Source Control and .gitignore

When using source control like Git, initialize a repository for your project. Normally, you will add the `.env` file type to `.gitignore`, which is a separate file that tells Git not to upload certain files. This prevents secrets from being uploaded to GitHub or other repositories.

```bash
.env
```

GitHub provides a list of common files to ignore for Node.js projects, such as `node_modules` and `.env` files. This is important to avoid uploading large dependencies and sensitive information.

## Demonstration: What Not to Do

If you create a repository and commit both `.env` and your code file, both will be visible on GitHub. This exposes your secrets, which is a security risk.

## Demonstration: The Proper Way

Instead, create a `.gitignore` file with the following content:

```bash
.env
node_modules/
```

Initialize your repository, commit, and push. This time, `.env` will not be uploaded, keeping your secrets safe.
