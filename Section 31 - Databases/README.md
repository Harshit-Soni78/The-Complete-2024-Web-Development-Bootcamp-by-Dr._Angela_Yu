# Section 31 - Databases

## Databases Explained: SQL vs. NoSQL

## Introduction to Data Persistence and Databases

In this module, we will learn all about data persistence, which means databases. When you built your own API in the previous module, you might have noticed that any new blog posts you created were wiped out as soon as you restarted your server. This happens because your data is held in a temporary form of memory, which is only valid as long as your server state does not get refreshed.

## Need for Permanent Data Storage

To persist data beyond temporary memory, we need some form of data storage. Unlike temporary variables, permanent storage retains data even after server restarts. For example, this is a magnetic memory disk from the Computer Museum in Bletchley Park. Despite its large size relative to a human face, it only stores four megabytes. Although technology has advanced significantly, the underlying principles of data storage remain similar.

## How Magnetic Storage Works

Magnetic storage uses an electromagnet to generate polarity. As a strip of little magnets moves around, changing the current through the electromagnet flips the poles. For example, a section can be North, another South, and so forth. When reading data, the computer looks at the polarity of these magnets to determine bits. Two magnets with opposite directions represent a 1, while magnets with the same direction represent a 0. This way, data is stored in bits and bytes by changing magnetic polarity.

## Importance of Databases

To prevent variables held in temporary memory from disappearing, we use databases. There are many types of databases, but the main types you will hear about are SQL databases and NoSQL databases.

## SQL Databases

SQL stands for Structured Query Language. It is a programming language that allows you to query databases organized in a structured format. SQL databases store data in tables. For example, a website might have a users table where you store fields such as name, password, and email. You must anticipate and define these fields beforehand, which determines the structure and size of the table. After creating the columns, you can add new records line by line, such as when a new user signs up.

### Relational Nature of SQL Databases

One of the greatest features of SQL databases is their ability to form relationships, which is why they are also called relational databases. For example, a user record can be linked to multiple blog posts. Instead of storing all data in one long record, you can have multiple records in different tables linked together. This allows you to query all posts written by a specific user easily using SQL.

### Popular SQL Databases

Popular SQL databases include Oracle Database, which is widely used in large corporations but can be expensive, as well as open-source options like Postgres, MySQL, and SQLite. Some databases are free and open-source, while others are proprietary and paid.

## NoSQL Databases

NoSQL stands for "no SQL" or "not only SQL." These databases are characterized by their flexibility. For example, you can create a document similar to JSON format with fields like name, email, and password. Unlike SQL databases, NoSQL databases allow you to change the structure of your data on the fly without modifying the entire database schema.

### Flexibility of NoSQL Databases

For instance, you can add an extra field such as "favorite food" for only one user without affecting other users. This flexibility means NoSQL databases are not obliged to hold to the original table structure defined at creation. This adaptability is advantageous as your product grows and you want to add new data fields.

### Advantages and Use Cases

NoSQL databases were created to address some challenges of SQL databases, such as the complexity of SQL language, which requires learning. NoSQL uses key/value pairs or document models, making it easier to use. They also address scalability, allowing data to scale vertically (more records) and horizontally (more fields) easily.

### Popular NoSQL Databases

Popular NoSQL databases include MongoDB, Redis, and DynamoDB. Some, like Redis, are open source, while others like MongoDB and DynamoDB are run by companies. DynamoDB is operated by Amazon. There are differences in free versus paid and open source versus closed source among these databases.

## SQL vs NoSQL Debate

Over the years, SQL has been seen as traditional and NoSQL as the new, flexible option. However, recent experiences show that SQL databases excel in relationships, consistency, and query efficiency. NoSQL databases sometimes face challenges with scalability and consistency in large infrastructure projects. Structured schemas in SQL help maintain code quality and predictable data retrieval.

## Popularity and Trends

According to StackOverflow surveys, Postgres, an open-source SQL database, is the most popular database technology among professional developers. MySQL and SQLite are simpler alternatives, and MongoDB is the leading NoSQL database. The course will focus on Postgres due to its professional relevance, scalability, reliability, and free availability.

## Course Outlook

In the next module, we will dive deep into learning SQL language, including how to perform CRUD operations and establish basic relationships. This knowledge is essential for professional web development.

## Key Takeaways

- Data persistence requires permanent storage beyond temporary server memory.
- SQL databases store data in structured tables with predefined schemas and support relationships.
- NoSQL databases offer flexible, schema-less data storage, allowing dynamic fields per record.
- Postgres, an open-source SQL database, remains the most popular and professional choice for web development.
