# What is the Internet Identity?

## Introduction to Internet Identity

Up to this point, we have been claiming our DANG tokens into the current logged-in user of the frontend, which in my case happens to have this Principal ID. However, the problem with this is that this is actually just an anonymous user. It is not a real user at all because we are not logged in. This user operating the website has no Principal ID to give our backend to use.

You may have noticed that when you logged in to, for example, the Network Nervous System, or when you initially signed up to get your free cycles from ICP, you had to go through a login process. This login process asked you to create an Internet Identity. When you create an Internet Identity, you are able to assign a device to that Internet Identity anchor, and it asks you to verify your identity using either a USB security key or your current laptop device, which in my case lets me log in using Touch ID.

### What is Internet Identity?

What exactly is this Internet Identity, and how can we implement it on our website to allow authentication of our users through the Internet Identity? That is what we are going to explore in this lesson. One of the things we were missing is this authentication ability on our website, and we are going to do it using something called the Internet Identity.

The idea with the Internet Identity is that it is an anonymous blockchain authentication framework supported by the Internet Computer. It fills a similar role to, say, "Log in with Facebook" or "Log in with Google." Authentication and keeping your users' passwords secure is actually quite a difficult technological task. This is why you have heard of so many security breaches and data leaks, from Ashley Madison to Equifax. Even big companies are not very good at keeping login information secure.

A better solution would be to offload this challenging task to a company that is good at technology, such as Facebook and Google, because they have the infrastructure and investment already made into authentication and keeping things secure using OAuth. But if letting big tech companies know every aspect of your online life does not sound like a good idea to you, then this is where the Internet Identity comes in, because it allows us to be anonymous.

Using the Internet Identity, we can create as many of these anchors as we want. These anchors give us a pseudo-identity which can be used to log in to decentralized applications. You can create as many of these anchors as you want or need. At this stage, the Internet Identity knows absolutely nothing about you. There is no username, no password, you do not need to provide an email to sign up, there are no seed phrases, one-time passwords, authenticator apps, or email confirmations. This means companies will not be able to track you across services or even know who you are.

The Internet Identity builds on the Web Authentication API, which is a specification written by W3C and FIDO with the participation of big companies like Google, Mozilla, Microsoft, and others. This means the technology behind it will be compatible with all modern browsers and operating systems.

When you create an Internet Identity, it is secured using chain-key cryptography, the same framework that powers the Internet Computer. It uses compatible cryptographically enabled devices such as the fingerprint sensor on a laptop or the Face ID system on a phone to authenticate you. From a user's point of view, this makes sign-up and login super easy because you do not have to remember any passwords or usernames. All you have to do is sign in using your biometric data like your face or fingerprint, which makes it very convenient and also eliminates the weakest point of online security, which is the user’s ability to generate secure enough usernames and passwords and to remember them.

### How Does Internet Identity Work?

When you add a device to an anchor and generate a new Internet Identity, a pair of cryptographic keys—a private key and a public key—are generated. The public key is stored on the Internet Computer blockchain, while your private key remains locked inside the authentication device, secured with biometric data such as Touch ID. When you log on to a decentralized application, both keys are required to authorize the session. The authorization from the Internet Identity then grants you access as an application-specific anonymous identity, allowing you to be pseudonymous across many applications. It also lets you create as many of these pseudo-identities as you need.

If you want to learn more, you can take a look at a demo from the Dfinity team, where the founder of Dfinity talks about how it works in more detail.
