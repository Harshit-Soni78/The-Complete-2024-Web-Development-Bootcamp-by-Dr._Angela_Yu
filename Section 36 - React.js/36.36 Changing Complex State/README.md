# Changing Complex State in React

## Managing Complex State in React

In this lesson, we discuss ways of managing more complex state. By complex, we mean managing the state of JavaScript objects where you might have to retrieve the previous value of the object. For example, if you add an input to a website and want to greet the user using both their first and last names, you need to keep both pieces of information stateful and independent.

Let us consider how to achieve this. Suppose you have a simple form with two inputs and a Submit button. Using your current knowledge, try to implement this functionality. Pause and attempt it before continuing.

The first requirement is a variable to hold the value being typed into both inputs. We create a stateful constant for the first name, such as `fName`, and a setter method, `setFName`, using the `useState` method. This method comes from the React modules, so it must be imported. The initial state is set to an empty string, which will be used as the value of the input and displayed in the `h1` element. The same process is repeated for the last name.

To control the inputs so that their values match the state, call `setFName` and `setLName` when the inputs change. Add the `onChange` prop to the inputs and call a function such as `updateFName`, which receives the event and updates the state accordingly.

When the input changes, create a new constant for the value and update the state using the setter method. This allows the input to update in real time. Repeat this for the last name input as well.

While this approach works, it can become cumbersome with many functions and separate constants. In most cases, related pieces of information, such as first and last names, should be grouped inside the same JavaScript object. To manage a more complex piece of state, use `useState` to store an object instead of a simple value.

Delete the duplicated code for the last name and change the constant to `fullName` with a setter `setFullName`. The initial state is an object with keys `fName` and `lName`, both set to empty strings. Now, `fullName` stores an object.

Update the code so that both inputs use the same `handleChange` function. When either input changes, it calls this function and passes the event. Inside the function, get the new value and determine which input triggered the change by accessing the `name` attribute of the input.

Create a constant called `inputName` and set it to `event.target.name`. Log both the new value and the input name to verify which input triggered the event and what value was entered.

If the inputs are not showing what you type, it is because they are controlled components and their value is set to the state, which has not yet been updated. Temporarily comment out the value attributes to make them uncontrolled while testing.

To update the object correctly, check which input was changed. If `inputName` is `fName`, call `setFullName` with a new object where `fName` is the new value and `lName` is the previous value. If `inputName` is `lName`, do the reverse. However, if you simply set the object with only one property, you will overwrite the other property.

Each time you call `setFullName`, you are replacing the entire object with only one property. To avoid this, use the previous value of the object and only update the changed part. Pass a function to `setFullName` that receives the previous value and returns a new object with the updated property.

When you type into the inputs, React re-renders the component and remembers the state. By using the previous value, you can update only the part that changed. For example, if the input name is `fName`, return a new object with `fName` set to the new value and `lName` set to the previous value. If the input name is `lName`, do the opposite.

Uncomment the value attributes so that the inputs are controlled and their values correspond to the latest state. This ensures the input fields always reflect the current state.

The code can be simplified using object destructuring. Instead of creating separate constants for the value and name, destructure them from `event.target` in one line. This makes the code cleaner and easier to read.

A word of warning: do not try to access the event or anything related to the event inside a stateful setter. React uses synthetic events, and accessing them inside a setter will cause errors. Always extract the necessary values from the event before calling the setter.

If any of these concepts are confusing, delete everything and start again from the beginning. Try to implement the behavior yourself to reinforce your understanding. Debug any issues you encounter to make the knowledge your own.

## Key Takeaways

- Managing complex state in React often involves grouping related values into a single object using `useState`.
- When updating part of an object in state, always use the previous state value to avoid overwriting other properties.
- Use destructuring to simplify event handling and avoid accessing synthetic events inside state setters.
- Controlled components in React require the input value to always reflect the current state.
