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

## JSX File Type and Attribute Naming

If you see a warning about an unrecognized angle bracket in your `index.js` file, it is because the file is being treated as a standard JavaScript file, not a JSX file. In `index.html`, when importing your script, you should specify the type as `text/jsx` if you are using JSX code.

```html
<script src="index.js" type="text/jsx"></script>
```

In HTML, attributes are not camel-cased. For example, `contenteditable` is all one word. In JSX, the convention is to use camelCase, so `contenteditable` becomes `contentEditable`.

```jsx
<h1 contentEditable={true}>Editable Heading</h1>
```

If you set `contentEditable` to `true`, the element becomes editable. If you set it to `false`, it is not editable. If you use the HTML attribute style (all lowercase), it will not work the same way in JSX. Always use camelCase for attributes in JSX.

## Disabling Spellcheck in Editable Elements

When editing an element in Chrome, spellcheck may be activated. To turn off spellcheck, use the `spellCheck` attribute in camelCase.

```jsx
<h1 contentEditable={true} spellCheck={false}>
  Editable Heading
</h1>
```

Now, when editing the `h1`, spellcheck is disabled. The most common attribute you will add is `className`, as this is the preferred way to add styling to React elements.

## Using CSS with React Elements

Just because you are using React to create HTML elements does not mean what you have learned about CSS or HTML becomes invalid. For example, you can target `ul` elements in your CSS and change their color.

```css
ul {
  color: blue;
}
```

When you refresh the page, your unordered list should turn blue. You can target classes, IDs, and HTML elements directly in CSS.

## Applying CSS Classes to Images

Suppose you have a `div` with three image elements. To make each image a 100px by 100px square, create a class in your CSS file.

```css
.food-img {
  height: 100px;
  width: 100px;
}
```

Apply this class to all three image elements using the `className` attribute.

```jsx
    <img className="food-img" src="image1.jpg" />
    <img className="food-img" src="image2.jpg" />
    <img className="food-img" src="image3.jpg" />
```

When you save and refresh your website, all images are rendered as 100 by 100 pixel squares because the CSS is applied.

## Using JavaScript Expressions as Attribute Values

You can insert JavaScript as an attribute value in JSX. For example, using a service like Lorem Picsum, you can generate a random image URL and use it as the `src` for an image element.

```js
const img = "https://picsum.photos/200";
```

```jsx
<img src={img} />
```

In JSX, image elements must be self-closing if they have no children. If you omit the closing tag, JSX will throw an error. HTML is forgiving, but JSX is not.

## JavaScript Expressions in JSX Attributes

You can use JavaScript expressions as attribute values by enclosing them in curly braces. For example, to turn a Picsum image grayscale, append `?grayscale` to the URL.

```js
const imgURL = "https://picsum.photos/200";
const grayscaleImg = imgURL + "?grayscale";
```

```jsx
<img src={grayscaleImg} />
```

When you refresh, the image is shown in grayscale. This is possible because JavaScript expressions can be used as attribute values in JSX.
