# Motoko Functions and the Candid User Interface

## Introduction to Functions in Motoko

In the previous lesson, we explored how to use variables and constants in the Motoko programming language. We also learned how to import libraries from the Motoko-based library and use them for tasks such as printing to the console.

In this lesson, we will delve deeper and add more functionality to our actor, specifically the DBank canister. One essential feature for a money market application is allowing users to deposit their cryptocurrencies or money into the application. To achieve this, we need to create a function.

## Creating a Function in Motoko

In Motoko, functions are created with the `func` keyword, similar to the Swift programming language. The next step is to give the function a name, such as `topUp`, and then open a set of curly brackets to define what happens when the function is triggered.

```mo
    func topUp() {
      currentValue += 1;
      Debug.print(debug_show(currentValue));
    }
```

Here, each time the `topUp()` function is called, it increases `currentValue` by 1. The previous debug print statement should be commented out to avoid confusion. At the end of the function, we print the new value of this variable using Motoko's `Debug.print` and `debug_show`.

## Calling the Function and Syntax Requirements

After defining the function, it can be called just below its creation. It is important to remember that every function in Motoko must be closed with a semicolon. If omitted, errors will occur.

```mo
    topUp();
```

When the function is called and the code is deployed using `dfx deploy`, the output will show that `currentValue` has been incremented by 1 and printed. This demonstrates how to call a function inside our DBank canister.
