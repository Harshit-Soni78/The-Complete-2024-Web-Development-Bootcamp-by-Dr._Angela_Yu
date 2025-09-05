# JSX Attributes & Styling React Elements

## Introduction to Styling React Elements

So far, our React websites have looked quite plain because we have not been able to add any CSS styling. We have been using standard HTML elements rendered by React.

## Adding CSS Styling in React

To style React elements, we can use attributes in JSX. For example, if we want to change an `h1`'s color to red, we can create a class in `styles.css` and apply it.

```css
.heading {
  color: red;
}
```

In `index.js`, if this were an HTML file, adding that class to the `h1` would be as easy as adding a `class` attribute and setting it to `heading`. In React, this still works, and when we apply the `heading` class style to our `h1`, it changes the color to red.

```html
<h1 class="heading">Hello World</h1>
```

However, if we open the Chrome Developer Tools, we see a warning: "Invalid DOM property `class`. Did you mean 'className'?" Even though JSX looks like HTML, it is rendered down to JavaScript, and in JavaScript, the property to access all classes on an element is called `className`.

```jsx
<h1 className="heading">Hello World</h1>
```

As soon as we change this to `className` and reload the site, the warning goes away. The proper name of this attribute is `className`.
