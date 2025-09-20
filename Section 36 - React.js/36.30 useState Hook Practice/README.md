# useState Hook Practice

## Introduction to useState Hook Practice

In this lesson, you will get more practice with the useState Hook. Begin by obtaining the starting sandbox and forking your own copy. Examine the challenge inside the index.js file, which consists of two parts.

## Challenge Overview

The first part of the challenge is to display the current time inside an h1 element every time the user presses the Get Time button. The current time can be obtained using a specific line of code, and it is currently being logged in the console. Modify the code inside App.jsx so that the time is shown in the h1 element whenever the button is pressed.

## Expected Behavior

When you refresh the app, it should load the time in the h1 element. Each time you click the Get Time button, the h1 should update to show the latest time at the moment the button is pressed. You can press it every second to update, and this is the goal for part 1 of the challenge.

## Part 2: Automatic Time Updates

As an addition to the challenge, in part 2, update the time every second so that it refreshes dynamically without needing to press the Get Time button. To achieve this, use the setInterval() method. If you do not specify the interval time, setInterval will attempt to call the function every millisecond, which can crash your CodeSandbox and make it unresponsive.

## Preventing Issues with setInterval

Always specify the time period before the function in setInterval to avoid performance problems. If your CodeSandbox becomes unresponsive, your progress will be saved. Simply close everything, restart Chrome, and return to your sandbox.

## Implementing the Solution in App.jsx

All the action will take place inside App.jsx. First, use the following line of code to get the current time:

```js
const now = new Date().toLocaleTimeString();
```

Log the value to ensure it works, and remove the log statement from index.js. You should now see the time in your console. The next step is to display this time inside the h1 element.

## Using useState to Track Time

Because the time will change continuously and you need to keep track of its state, use the useState Hook. Create a new constant as a destructured array. The first item is the state variable (for example, `time`), and the second item is the function to update this state (for example, `setTime`). Set the initial value to `now`.

```js
const [time, setTime] = useState(now);
```

Use this state variable inside your h1 element by replacing the hardcoded time with curly braces to insert the dynamic value.

```js
<h1>{time}</h1>
```
