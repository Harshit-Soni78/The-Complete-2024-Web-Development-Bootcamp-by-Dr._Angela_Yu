# Level 5 - Hide your Secrets with Environment Variables

## Introduction to Environment Variables

In this lesson, the concept of environment variables is introduced. Environment variables are not primarily about keeping user data safe, but about keeping your own data secure.

## The Importance of Keeping Secrets Safe

Previously, when creating a session, an encryption key or secret was required. Keeping that secret in your `index.js` file, which is often uploaded to GitHub or placed on a server, makes it very easy for that information to be leaked. People can crawl GitHub looking for secrets and API keys to exploit. There are many stories of developers accidentally publishing AWS keys on GitHub, resulting in significant financial loss, such as a $3,000 AWS bill. While some are lucky to get refunds, not everyone is as fortunate. These stories highlight the importance of keeping secrets and API keys off the internet, where they are publicly searchable and can be stolen.

## Why Use Environment Variables?

For an app to work, secrets are needed to encrypt the database. When collaborating or using version control, you may need to publish your code. The way developers solve this is by using environment variables. There are two main use cases for environment variables:

- **Convenience:** When deploying large applications, the process is complicated. Environment variables allow you to change certain variables without modifying the codebase.
- **Security:** It is not a good idea to store authentication keys or API keys in the same place as your code. Environment variables allow you to separate sensitive information from your codebase.
