# State in React - Declarative vs. Imperative Programming

In this tutorial, we have learned how to build components using React, extract those components into smaller pieces, and pass properties to customize and reuse them.

However, we have not yet explored how to make our applications more interactive. To achieve this, it is essential to understand the concept of State, which is central to how React operates.

The core idea is that the user interface (UI) that someone sees on your website is a function of the state of your application.

## Analogy: Ice and Water

Consider the difference between ice and water. They are essentially the same substance but change appearance depending on the temperature state. If the temperature rises, ice turns into water; if it falls, water turns back into ice. In this analogy, the ice represents the user interface, which changes based on the state value of temperature. For example, at minus 10 degrees Celsius or Fahrenheit, you see ice, but if the temperature changes to 60 degrees, the ice becomes water. Thus, changes in the user interface reflect changes in state.

## Implementing State in Code

In code, we would track a variable, such as temperature, and define how the user interface changes depending on different values of that variable.

For example, consider a simple to-do list application with an App component containing a ListItem component that hosts a single paragraph of text. We want the text to have a line-through style when the list item is clicked. We can achieve this by introducing a state variable called `isDone`, initially set to false. When the user clicks the to-do list item, we switch `isDone` from false to true, and the paragraph element updates its appearance to reflect this change by applying strikethrough styling.
