# Level 5 - Hide your Secrets with Environment Variables

## Introduction to Environment Variables

In this lesson, the concept of environment variables is introduced. Environment variables are not primarily about keeping user data safe, but about keeping your own data secure.

## The Importance of Keeping Secrets Safe

Previously, when creating a session, an encryption key or secret was required. Keeping that secret in your `index.js` file, which is often uploaded to GitHub or placed on a server, makes it very easy for that information to be leaked. People can crawl GitHub looking for secrets and API keys to exploit. There are many stories of developers accidentally publishing AWS keys on GitHub, resulting in significant financial loss, such as a $3,000 AWS bill. While some are lucky to get refunds, not everyone is as fortunate. These stories highlight the importance of keeping secrets and API keys off the internet, where they are publicly searchable and can be stolen.
