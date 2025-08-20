# How to Hack Passwords

All right, now that we have covered creating user passwords, encrypting our database, and hashing passwords, we have reached a level of security that most websites currently have. There is much more security to learn later on, but at this point, you already know quite a lot about authentication and keeping user passwords secure—definitely more than many people who actually run websites.

If you are keen to get a job, I recommend visiting a website called plaintextoffenders.com, which I will link in the course resources. On this site, you will find emails from various companies where users have requested to reset their passwords, and the companies have sent the users a plain text version of their passwords. This indicates poor security practices.

To have access to a user's password in plain text means the company is doing something very wrong with password security. Either the passwords are encrypted with a stored encryption key, or worse, they are stored in the database as plain text, which is the worst possible security practice. Given that you know better than these companies, such as getlinuxjobs.com, worldsim.com, or Telecomegypt, you could reach out to them as a web developer offering help to improve their authentication and password security.

If you are not looking for a job, you should still check these websites, and if you have accounts on them, be sure to delete your account because they are definitely not secure. This is a common reason why many companies and websites get hacked—they do not advance beyond basic security measures.

Now, let's discuss how passwords are hacked—a "Hacking Passwords 101" class. Most of the time, I use my programming skills for good, but in this case, understanding how hackers approach password cracking will help us learn more about security and make our websites safer for users.

As a company, one of the worst days is when you wake up to find you have been hacked. This has happened recently to many big companies like Adobe Creative Cloud in 2013 and LinkedIn in 2012, where user passwords were leaked, causing many unhappy users who reused passwords to feel extremely vulnerable.

Even today, people can purchase hacked accounts where users may not realize their LinkedIn email and password are linked. Hackers can use this data to access other accounts such as PayPal or similar payment portals. I recommend visiting plaintextoffenders.com for educational purposes; enter your email address and if any passwords show up, change them everywhere you use that password.

Why do big companies get hacked and leak user passwords? Are they not encrypting or hashing passwords? They do, but consider this scenario: as a hacker, you gain access to the LinkedIn user database. For simplicity, the database contains usernames and password hashes. Thankfully, passwords are not stored in plain text, so you cannot access them directly.

However, looking closely at the table, you notice that three of the hashes are identical. This happens because the same password always produces the same hash, which is a core property of hash functions used for user validation. Therefore, a hacker can see that Angela, Tony, and Emily all have the same password.

The hacker can construct a hash table by taking commonly used passwords and hashing them with the same hash function. Some of the most common passwords are "123456", "qwerty", "password", and "111111". By generating hashes for these passwords, the hacker can compare the hashes in the user database to the hashes in their table to find matches and reveal the original passwords.

For example, if the hash matches the hash of "qwerty", the hacker knows that three out of four users in the table use "qwerty" as their password. But what if users did not use common passwords and instead used something like their date of birth or pet's name? This is where dictionary attacks come in.

A dictionary attack involves creating hashes for all possible words in a dictionary, which might be about 150,000 words. Then, the attacker adds numbers from a telephone book and all combinations of characters up to six places, resulting in approximately 19.8 billion combinations. Although this number sounds large, modern computers can compute hashes very quickly.

To speed up the process, attackers use the latest GPUs, which are capable of parallel processing and are well-suited for generating hashes. For example, a modern GPU can calculate about 20 billion MD5 hashes per second. This means that the 19.8 billion combinations in the hash table can be computed in approximately 0.9 seconds, which is negligible.

Large hash tables have been built for the most common passwords based on data from previous hacks such as Adobe, LinkedIn, TalkTalk, and Equifax. Companies like SplashData compile lists of the most common passwords annually, such as the top 25 passwords. These values are used to build hash tables.

Pre-built hash tables exist for the top 10,000 most common passwords. MD5 is one of the fastest hashes to calculate, which is why MD5 hash tables are very common. You can even use Google as a basic hash table by pasting a hash from a hacked database into a search and finding the original password.

If you are concerned about this, consider that in our user table, there was one hash that was very difficult to find and did not match any hashes in simple hash tables or Google searches. This is because the user, John, created a very strong password with uppercase letters, lowercase letters, numbers, symbols, and most importantly, a long password.

When you think about hashing as a mathematical formula, the computation time to crack a password increases exponentially as the number of characters increases. Therefore, even if your account was hacked, as long as you have a strong password, attackers will not be able to work it out from a hash table.

For example, there is a website called Password Checker where you can enter your password to see its strength and how long it would take various machines to crack it. A six-character random password can be cracked in about three seconds on a standard desktop PC. However, adding another six characters increases the cracking time to 31 years on a standard PC and two years on a fast GPU.

Although websites encourage adding capital letters, lowercase letters, numbers, and symbols, if your password is only six characters long, it can still be cracked quickly. The most important factor in creating a strong, almost uncrackable password is increasing the number of characters. To avoid dictionary attacks, do not use dictionary words, place names, or telephone numbers.

After this lesson, you will know how to keep yourself more secure. In the next lesson, we will address vulnerabilities caused by weak hashing algorithms and learn how to combat hackers who use dictionary attacks or hash tables to attack databases.

As a quick bonus, if you want to trick your friends into thinking you are a hacker, at least according to Hollywood, check out a website called hackertyper.net. You can just mash the keyboard and it produces something that looks extremely realistic. However, be cautious not to do this on an airplane or in a government building unless you want to be investigated.
