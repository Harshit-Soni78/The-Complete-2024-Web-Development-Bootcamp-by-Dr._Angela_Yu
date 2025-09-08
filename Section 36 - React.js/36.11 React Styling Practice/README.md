# React Styling Practice

## React Styling Practice Challenge

There is no better way to prove that you have understood what you have learned than by doing it all from scratch yourself. Here is the challenge for you: create a new React app that shows a single `h1` element. That `h1` will display different pieces of text depending on the current time.

### Greeting Based on Time

- If the current time is between midnight and 12 PM (midday), it should say "Good morning".
- If it is currently between midday and 6:00 PM, it should say "Good afternoon".
- If it is between 6:00 PM and midnight, it should say "Good night".

You will use logic to render a different piece of text in that `h1` depending on your local time.

### Applying Styles

Apply the style under a class style called `heading` to the `h1`. This style has already been created for you. You just need to apply it to the `h1` using what you have learned before.

### Dynamic Color Styling

Dynamically change the color of the `h1` using inline styles:

- If it says "Good morning", the text should be red.
- If it says "Good afternoon", it should be green.
- If it is night, it should be blue.

This is what it looks like in the end: if the current time is 16:55, it says "Good afternoon" and it is green. If you change the date to 10:00 AM, it says "Good morning". If you change it to 19:00, it says "Good night".

This challenge will apply everything you have learned so far. You might need to review some previous lessons or code in the sandboxes. It is important to struggle a little and get it to work. Pause the video now and see if you can build this functionality using everything you have learned. Then come back and we will go through the solution together.

## Solution Walkthrough

I hope you gave that a real good try. If you got stuck, I hope you tried to struggle through it and search for solutions online, because it is through the struggle, debugging your code, trial and error, and spending time with the code that you really level up.

If you need more time, go ahead and give it a real go. If you have already completed it, or if you just need a few hints or tips, let us go through the solution together.

### Rendering the h1 Element

The first part is straightforward. We need to render a single `h1`. Since we are just creating a single `h1`, we do not need to put it inside a `div`. We will render it as it is and put it into our `root` div.

```js
const date = new Date();
const currentTime = date.getHours();
```

Now we can get the current time. For example, if the console prints 17, that means it is 5:00 PM. We can use this number to figure out what the current time is.

### Determining the Greeting

We will use an if-statement to check the time and set the greeting accordingly.

```js
let greeting = "";
if (currentTime < 12) {
  greeting = "Good morning";
} else if (currentTime < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good night";
}
```

Now the `greeting` variable will hold different pieces of data depending on the current time. We can insert that variable inside our `h1` using curly brackets.

```js
<h1>{greeting}</h1>
```

If it is 5:00 PM, it will say "Good afternoon". If you change the date to 10:00 AM, it will say "Good morning". At 19:00, it will say "Good night". At 14:00, it will say "Good afternoon". So it is working as expected.

### Applying the Heading Style

In your stylesheet, there is a class called `heading`. Apply it to your `h1` using the `className` attribute in JSX.

```js
<h1 className="heading">{greeting}</h1>
```

Now the heading style is applied to your text. It is bigger, bolder, and has a line at the bottom.

## Dynamic Inline Styling

Now, we will dynamically change the color of the `h1` using inline CSS styles. Use the `style` property and set it equal to a JavaScript object.

```js
const customStyle = {
  color: "",
};
if (currentTime < 12) {
  customStyle.color = "red";
} else if (currentTime < 18) {
  customStyle.color = "green";
} else {
  customStyle.color = "blue";
}
```

Now, apply that style to your `h1` by adding the `style` property and passing in the `customStyle` object.

```js
<h1 className="heading" style={customStyle}>
  {greeting}
</h1>
```

Now, if it is afternoon, the text is green. If it is 10:00 AM, it is red for morning. If it is 19:00, it is blue for night.

## Practice and Next Steps

Did you manage to solve this challenge? If not, go back to your code and try to apply what you have learned in this video. The code will be available in the course resources for you to refer to if needed. Make sure you have had enough practice with the code and time to play around with it to understand it before moving on to the next lesson.

Once you are done, head over to the next lesson to learn more about React components.

## Key Takeaways

- Practicing by building from scratch is the best way to solidify your understanding.
- Use JavaScript logic to display different greetings based on the current time.
- Apply CSS class styles and dynamic inline styles in React components.
- Debugging and struggling through code challenges are essential for learning.
