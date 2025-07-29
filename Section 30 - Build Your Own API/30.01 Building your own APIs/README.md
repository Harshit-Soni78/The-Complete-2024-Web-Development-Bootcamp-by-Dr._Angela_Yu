# Building your own APIs

In the previous lessons, we learned all about Application Programming Interfaces, otherwise known as APIs.

In this module, we are going to learn how to build our own APIs from scratch so that you can get a good overview of the entire process.

In the previous Capstone project, I showed you a list of public APIs. These are APIs that anyone can access as long as you have signed up or have the correct credentials. Some of them are paid, and some are free, but they are available to anyone on the Internet.

This list encompasses pretty much every single topic, anywhere from Health to Pets to Public infrastructure. I am sure you had a good look through it in order to choose the one you wanted to use for your capstone project.

The reason why we use APIs is because they make development so much faster. Instead of building everything from scratch and collecting or cleaning data, or building up services, you can leverage other people's existing data, services, or algorithms in order to build a product on top of that existing API.

You could go from zero to one in the space of minutes rather than years.

A really good resource I recommend checking out is Rapid API. They are a company that collates and allows people to host APIs that customers or clients can consume from.

Being able to do that, cutting down your development time and leveraging other people's work or data, is a really valuable service. That is why people often charge for it.

This website, Rapid API, is kind of like the Amazon for these paid APIs. They have free APIs as well, but mostly APIs developed by developers like you. They are hosted on this website, and anyone who needs to use them, for example to translate texts or get basketball data, can use these APIs and pay according to how many requests they make.

Rapid API also has free APIs that can be used by developers. Take a look and explore this website to see what you could do if you were to create your own API hub.

What makes an API monetizable? What makes it valuable enough for you to list on Rapid API and for people to start paying you to use those APIs?

Broadly, there are three categories:

- Having a large and valuable data collection.
- Having a proprietary algorithm or a really useful service that people can tap into using your API.
- Having a simplified interface, a simplified API for people to work with something else, be it a real-world service or another API.

Examples include:

- A large collection of over a thousand pasta recipes, typed up and made available via an API. This could be valuable to someone building a recipe app.
- A weather station providing live weather data in any location, which is more valuable and also falls into the data collection category.

Another category is an algorithm or a service. For example, an algorithm that calculates the direct line distance between any two coordinates on the map, or the driving distance via available roads.

This could use other APIs like Google Maps or satellite APIs amalgamated into one service. Such an algorithm saves people time and makes your API valuable.

On a larger scale, something like ChatGPT took years to collect data from the Internet, train a large model with significant computing power and cost. By allowing access to this service via an API, developers pay for the value it provides.

The final category is a simplified interface as an API that you create. For example, an API that allows you to order a pizza by providing location and card details, resulting in pizza arriving at your doorstep.

This essentially takes a real-world service without internet-enabled capabilities and enables it via an API. Such an API is valuable.

On a more complex scale, you could simplify large APIs like Google Maps or Google Sheets by focusing on common use cases, making them easier for developers to use with fewer lines of code, saving time and increasing accessibility.

There is a real-world example of a Domino's Pizza API, which is a NodeJS API. The code is open source on GitHub, so you can look through it to understand how this API was created.

This is an open API, free to use and open to the public. However, if hosted on Rapid API, the source code might not be visible to prevent cloning.

Another category of APIs is internal APIs. We have talked a lot about external or public APIs, which are available to anyone who pays or signs up.

Internal APIs are used within companies. For example, a company like Amazon needs to keep track of inventory in warehouses, or a company selling encyclopedias door to door needs to know how many have been sold and how many remain.

This is important to avoid running out of stock or duplicating sales efforts. Internal APIs help manage such data and processes.

We have been building internal APIs every time we build a backend because they are not opened for external use. This does not mean others cannot access them, but they are not documented or supported for external use.

Without security features, internal APIs can be accessed, which is a concern. This is a large category where people try to discover private APIs of companies, which we will not cover now but is important to be aware of when building or using APIs.

What we are going to build in this module is a REST API. REST stands for Representational State Transfer.

It is a set of rules describing how an API should be designed. Let's review what we need to do to follow the REST architecture.

## What Makes an API RESTful?

This is a classic interview question. The number one rule for making an API RESTful is that it uses standard HTTP methods.

These are your GET, POST, PUT, PATCH, and DELETE methods. These standard verbs are used to interact with the RESTful API.

For example, to retrieve something from the API, you use GET; to delete something, you use DELETE.

The next rule is that the API should have a standard data format for responses, such as JSON (JavaScript Object Notation) or XML.

This is the representation part of Representational State Transfer. Resources are represented in a specific format like JSON and sent in response to the client.

Another rule is that clients and servers in RESTful APIs are completely separate. They are not on the same system or file and communicate over a network.

This separation allows each side to scale independently and evolve separately, enabling the whole system to scale easily.

Statelessness is another key rule. Each request from the client to the server should contain all the information needed to understand and process the request.

The server should not store any client-side state between requests. Each request and response is complete without needing to know previous interactions.

This improves scalability and simplifies server-side implementation.

RESTful APIs are resource-based, centered around resources identified by Unique Resource Identifiers (URIs) or URLs.

A URL is simply an address for a particular resource in the API.

You might notice these rules seem familiar because the Internet, or World Wide Web, is considered one of the most successful implementations of RESTful architecture.

We locate resources using URLs, interact with servers using HTTP, receive responses in standard data formats like JSON or XML, have strict client-server separation, and the Internet is stateless.

Every request contains all information needed to determine the response.

This is why we are learning to create RESTful APIs—it is a key concept in web development and essential for becoming web developers.

The API we will build is a joke API. It is a RESTful API abiding by all the rules discussed and serves jokes to anyone who wants to access it.

Imagine you have written a hundred good jokes categorized into different types and allow anyone to tap into your API to get jokes.

This will allow us to see how everything works in practice by building this API from scratch.

Once you are ready, let's get started.

## Key Takeaways

- APIs enable faster development by leveraging existing data, services, or algorithms.
- Monetizable APIs often have valuable data collections, proprietary algorithms, or simplified interfaces.
- RESTful APIs follow key rules including use of standard HTTP methods, statelessness, resource-based URIs, and client-server separation.
- The internet itself is a prime example of RESTful architecture in practice.
