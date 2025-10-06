# Motoko Conditionals and Type Annotations

## Introduction to Motoko Conditionals and Type Annotations

In the previous lesson, we explored how to create functions in Motoko and how to modify variables using these functions. The final function added was able to subtract a user-entered amount from the `currentValue` variable.

However, there is a problem: if `currentValue` is subtracted to a point where it becomes less than zero, an error occurs when calling this function. For example, subtracting 999 from 100 results in an error stating, "Natural subtraction underflow."

This error occurs because `currentValue` is a natural number, which starts from 0 and can only be positive. If it is subtracted below zero, such as when the amount is very large, it causes an underflow. This is not allowed with the current data type.

To prevent this, an if-statement can be added. The conditionals and control flow in Motoko are similar to those in JavaScript. If the condition `currentValue - amount >= 0` is met, the function proceeds to set `currentValue` to the previous value minus the amount, and then prints it out.

## Handling Type Warnings in Motoko

When writing this, a yellow squiggly line appears, indicating a warning: "The operator may trap or inferred type Nat." This warning means that due to the operation, the final data type after subtraction is uncertain, which can cause issues in the if-statement.

To resolve this, explicitly specify the data type of the final value. This can be done inline or by defining a new constant. For example, create a new constant called `tempValue` and set it to `currentValue - amount`.

```mo
    let tempValue = currentValue - amount;
```

Within this constant, assign a type using a semicolon. Assign `tempValue` a data type of `Int`, which allows it to be any whole number, positive or negative.

```mo
    let tempValue : Int = currentValue - amount;
```

Replace the original comparison with `tempValue` so it is compared against zero. Now, there is no ambiguity regarding data types: the input amount is of type `Nat`, `currentValue` is of type `Nat`, and `tempValue` is explicitly typed as `Int`. By default, positive numbers are assigned the natural number data type unless specified otherwise.

## Completing the If-Else Statement

If `tempValue` is less than 0, add an else statement to handle this case. Use `Debug.print` to notify the developer that there is an issue.

```mo
    if (tempValue >= 0) {
      currentValue := currentValue - amount;
      Debug.print("Withdrawal successful");
    } else {
      Debug.print("Amount too large; currentValue less than 0");
    }
```

In this case, since only text is being printed, `debug_show` is not needed. If unsure, review the earlier lesson on this topic.
