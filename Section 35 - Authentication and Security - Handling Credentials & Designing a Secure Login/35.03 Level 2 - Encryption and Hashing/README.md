# Level 2 - Encryption and Hashing

In the last lesson, we examined the most basic level of authentication, which is simply through the use of an email and password.

As we saw, this method is somewhat lacking in security because we can very easily access our database and see any user's password in plain text.

Storing passwords in plain text is very bad practice.

Every so often, you might hear in the news that a website or company has been hacked and all their users' information has been leaked.

You might have heard of the Ashley Madison hack or the Experian hack. Many of these websites end up being prosecuted and may have to pay fines for not storing their users' data securely.

It is not just about angry users; there are also legal implications, which is why we need to think about these issues very carefully.

If storing a user's password as plain text is the worst possible way of securing it, it does not mean this will immediately lead to problems because, as a normal user accessing the website, you cannot view the source code or access the backend database easily.

However, there is enough precedent where this has happened, so we need to think about securing those passwords more carefully.

## Encryption

This leads us to the topic of Encryption, which you might have heard of already. It is defined as "the process of converting information or data into a code," also called a cipher.

The main reason for encryption is to prevent unauthorized access so that people cannot easily view sensitive information.

A simple example of encryption is the Caesar Cipher, named after Julius Caesar. This is an extremely simple cipher where we take the alphabet and apply an encryption key.

For example, if the key is 4, we shift the letters by 4 positions so that A becomes E.

Thus, the alphabet is shifted accordingly. If a user types the secret "ABC," when encrypted using the Caesar cipher with a key of 4, it becomes "EFG."

This ciphertext can then be stored or transmitted securely. Because the recipient knows the encryption key, they can reverse the process by shifting each letter back by four steps to recover the original message "ABC."

You can try this yourself on a website called Cryptii, where you can input plain text such as "Hello" and see it automatically shifted by the encryption key, for example, 4.

By looking at the ciphertext, someone might think it is a foreign language and not know the original message. However, decoding is simple if you know the key.

We have already looked at encryption: taking the user's password and securing it using an encryption key and a cipher method, whether it be the Caesar cipher, the Enigma cipher, or a modern cipher like AES.

No matter which method we choose, we always have a password, a key, and end up with ciphertext that makes it difficult for people to guess the original password immediately.

For example, if we take the password "qwerty" and use the Caesar cipher with a shift of 1, the encryption key is 1, and the ciphertext is the password shifted by one letter.

To decrypt, knowing the key allows us to shift the ciphertext back by one to recover the original password.

The Caesar cipher is a very weak encryption method. It is incredibly easy to figure out the original text even without the key.

### Historical Example of Weak Encryption

To illustrate the dangers of weak encryption, consider a story from history. In the 1500s, the land now called the United Kingdom was divided into two large areas: Scotland and England, ruled by Mary, Queen of Scots, and Queen Elizabeth I, respectively.

Both queens wanted more power and land. Mary, Queen of Scots, plotted with Lord Babington to assassinate Queen Elizabeth to become the legitimate heir to both thrones.

To communicate secretly, they used ciphertext to encrypt their letters, hoping to conceal the subject if the letters fell into the wrong hands.

However, their encryption method, a letter substitution similar to the Caesar cipher, was very weak. Queen Elizabeth's chief decoder deciphered their letters and discovered their encryption key.

He then wrote a letter back to Lord Babington to extract the names of all co-conspirators.

As a result, Queen Elizabeth accused Mary, Queen of Scots, of treason, leading to her execution.

This story illustrates that weak encryption systems can put user passwords at risk and cause severe consequences, such as loss of trust or reputation, as seen in companies like TalkTalk or Equifax.

If you are interested in more stories and learning about cryptography and encryption, a great book recommendation is "The Code Book" by Simon Singh.

## Modern Encryption: AES 256

Today, we use much more secure encryption methods such as AES 256. Although it involves complex mathematics, the essential process remains the same: we have plain text and an encryption key, which is kept secret and not shared with others.

Encrypting a string with AES produces a much longer ciphertext, making it difficult to deduce the original text length.

If the recipient knows the encryption key, for example, "TOPSECRET," they can decrypt the ciphertext back to the original message.

However, a weakness of this symmetric encryption is that if someone obtains the encryption key, they can decrypt all data encrypted with it.

This means that if a hacker gains access to the key, they can decrypt every user's password, which is highly undesirable.

## Hashing: Securing Passwords Without Keys

How can we make passwords more secure? The biggest flaw in our current authentication method is the need for an encryption key to both encrypt and decrypt passwords.

If a hacker is motivated enough to access your database, it is likely not difficult for them to also obtain your encryption key, even if it is stored securely on your server.

Hashing addresses this weakest link by removing the need for an encryption key.

You might ask, if there is no encryption key, how can we decrypt the password back into plain text? The answer is: we do not.

When a user registers, they enter a password, which we convert into a hash using a hash function and store that hash in our database.

Hash functions are mathematical equations designed to make it almost impossible to reverse the hash back into the original password.

How is it possible to quickly compute a hash from a password but make reversing it nearly impossible? Consider the following example.

What are the factors of 377 other than 1 and 377? 377 is not a prime number; it has other factors.

You might try dividing 377 by 2, which is 188.5, not a whole number, so 2 is not a factor. Dividing by 3 gives 125.666..., also not a factor.

After testing multiple numbers, you find that 13 and 29 are factors of 377.

This process of finding factors is tedious and time-consuming.

However, multiplying 13 by 29 to get 377 is quick and easy.

This simplified example illustrates how a hash function works: it is easy to compute the hash (multiplying factors) but hard to reverse it (finding factors).

Real hash functions add complexity to make reversing nearly impossible with current computing power.

For example, calculating the hash might take a millisecond, but reversing it could take years, making it impractical for hackers.

When a user registers, we hash their password and store the hash. Later, when they log in, we hash the entered password and compare it to the stored hash.

If the hashes match, the login password is correct. At no point do we store the password in plain text or reverse the hash.

Only the user knows their original password.

Hashing also has its own challenges because as soon as a problem arises, motivated hackers find solutions.

In the next lesson, we will explore how hackers can attempt to crack user passwords.

For all of that and more, I will see you there.
