# Level 2 - Encryption and Hashing

In the last lesson, we examined the most basic level of authentication, which is simply through the use of an email and password.

As we saw, this method is somewhat lacking in security because we can very easily access our database and see any user's password in plain text.

Storing passwords in plain text is very bad practice.

Every so often, you might hear in the news that a website or company has been hacked and all their users' information has been leaked.

You might have heard of the Ashley Madison hack or the Experian hack. Many of these websites end up being prosecuted and may have to pay fines for not storing their users' data securely.

It is not just about angry users; there are also legal implications, which is why we need to think about these issues very carefully.

If storing a user's password as plain text is the worst possible way of securing it, it does not mean this will immediately lead to problems because, as a normal user accessing the website, you cannot view the source code or access the backend database easily.

However, there is enough precedent where this has happened, so we need to think about securing those passwords more carefully.
