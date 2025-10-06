# Motoko Conditionals and Type Annotations

## Introduction to Motoko Conditionals and Type Annotations

In the previous lesson, we explored how to create functions in Motoko and how to modify variables using these functions. The final function added was able to subtract a user-entered amount from the `currentValue` variable.

However, there is a problem: if `currentValue` is subtracted to a point where it becomes less than zero, an error occurs when calling this function. For example, subtracting 999 from 100 results in an error stating, "Natural subtraction underflow."

This error occurs because `currentValue` is a natural number, which starts from 0 and can only be positive. If it is subtracted below zero, such as when the amount is very large, it causes an underflow. This is not allowed with the current data type.

To prevent this, an if-statement can be added. The conditionals and control flow in Motoko are similar to those in JavaScript. If the condition `currentValue - amount >= 0` is met, the function proceeds to set `currentValue` to the previous value minus the amount, and then prints it out.
