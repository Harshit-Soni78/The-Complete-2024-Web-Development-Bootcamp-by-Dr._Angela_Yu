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
