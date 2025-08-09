# One to Many Relationships

## Introduction to One to Many Relationships

In the previous lesson, we explored One to One Relationships. Now, let's examine the next type of relationship that we can create in our Postgres database. This is probably one of the most frequently used relationships: the One to Many relationship. In many cases, this is the relationship you will often rely on because it occurs very frequently in data storage.

The way a One to Many relationship works is if you consider a case where you have something that has only one record, for example, one student, but that student has many of some other type of data. This results in a One to Many relationship.

### Example: Students and Homework Submissions

In this example, we have our students table as before. In our school, we have students, and each student makes many homework submissions. This is how we end up with a One to Many relationship. Each piece of homework can only have one student who did the work. We do not have group projects in our school, but one student can be associated with many pieces of homework. Therefore, if you take the student as a starting point, this is a One to Many relationship. However, if you take the homework submission as the starting point, then you would call this a Many to One relationship.

Another example to consider is a customer database. Suppose you sell Christmas trees and want to keep track of your customers. A customer can make many orders. For instance, they might make an order for a tree in 2012, another order in 2020, and so on. Here, the orders table represents the Many side, and the customer table represents the One side. To represent this relationship, we need a Many to One relationship.
