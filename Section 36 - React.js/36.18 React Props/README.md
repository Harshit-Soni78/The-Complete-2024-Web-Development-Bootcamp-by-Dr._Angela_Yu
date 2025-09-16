# React Props

## Introduction to React Props

In this lesson, we are going to level up our knowledge around React components by learning about something called Props. Start by heading over to the starting CodeSandbox and forking it. Once you have it, feel free to download it to use in your local environment or follow along in CodeSandbox.

Here, we have a simple Contacts app with three people. Each contact includes a name, a picture found on the Internet, some fake phone numbers, and fake emails. Looking inside our index.js, the code is quite repetitive and long. This is a perfect use case for React components because these repetitive elements clutter the code, making it unnecessarily complex.

Let's extract each of these contacts as a brand new component. We'll create it inside index.js so you can easily see both the component and the rendering side by side. We'll call this component `Card`, like a contact card, and it will return each of these contact items.

I cut Beyonce's contact out and insert it into a `div`. Now, the `h2`, `img`, and two paragraph elements are returned from the `Card()` function. I will remove the other contacts from the render function to keep the website simple and easy to follow. Instead of having all those divs, I can now create three `Card` components.

After reloading, you can see that all three cards display Beyonce's information. This is not what we want. Instead, we want different pieces of information in each reusable `Card` component. With the knowledge we have so far, it is difficult to make these components reusable because we cannot send custom data to each `Card` component to render differently.

### Passing Custom Data in Plain HTML

Let's consider how this problem is solved in plain HTML. If we look at the `index.html`, we can delete all the cards to clear the screen. Right below the `root` div, where React components are rendered, I create a plain HTML input element. This input element has attributes that can be set with custom values.

For example, I can change the `id` attribute to `fName` and set a placeholder attribute to "Enter your first name." When refreshed, the placeholder text appears in gray. I can also set a value attribute to pre-fill the input field. If I delete the value, the placeholder text reappears. This is a way to pass custom pieces of information via attributes to an HTML element.

Using Chrome Developer Tools, I can access this input element with `document.getElementById('fName')` and store it in a variable. I can then access its properties like `.placeholder` and `.value` to get or set their values. These attributes are predetermined and listed in MDN documentation, but we cannot define our own custom attributes in plain HTML.

### React Components as Custom HTML Elements

React components can be thought of as custom HTML elements. We can define attributes for these components, and in React, these attributes are called properties or Props. For example, creating a new `Card` component is like calling a function that returns a custom HTML element. We can pass properties to this component using syntax similar to HTML attributes.

I can pass a `name` property to the `Card` component with the value "Beyonce." Inside the `Card` function, these properties are accessible via an object called `props`. Logging `props` shows an object with the property `name` set to "Beyonce." This means we can remove hard-coded parts of our React components and instead rely on the values passed through props.

I can also pass other properties such as `img` for the image URL, `tel` for telephone number, and `email` for the email address. Inside the `Card` component, I access these properties using `props.img`, `props.tel`, and `props.email`. Since we are inside JSX, JavaScript expressions must be enclosed in curly braces `{}` to be interpreted correctly.

Now, the `Card` component is generic and no longer contains any Beyonce-specific information. We can create as many `Card` components as needed with different pieces of information by passing different props. This allows us to reuse the `Card` component's structure and styling efficiently.

### Challenge

Try creating another `Card` component with an imaginary or real contact. Provide different values for `name`, `img`, `tel`, and `email`. This second card should appear below the first but display different information. This exercise will help you practice reusing custom components with props.

### Class Names and HTML Attributes in React Components

If you add a CSS class to a `div` in your React component using `className="my-style"`, the styles apply correctly. However, you cannot add the `className` attribute directly to your custom `Card` component expecting it to apply as an HTML attribute. React treats `className` on custom components as a prop, not as an HTML attribute.

Predetermined HTML attributes like `id`, `placeholder`, and `value` must be applied to actual HTML elements, not custom React components. Inside custom components, you can create any prop names you want and associate them with any values. Essentially, calling a React component function passes an object called `props` as input, which you use to customize the returned HTML element.

### Summary

- HTML attributes are fixed names like `id`, `placeholder`, and `value` that accept custom data.
- In React, custom components can have any number of props with any names you define.
- Props are passed as an object to the component function and accessed via `props.propertyName`.
- This mechanism allows components to be reusable and dynamic based on the data passed to them.

In the next lesson, you will test your understanding of props by building a fully-fledged Contacts app using everything learned here.

## Key Takeaways

- React components enable code reuse by encapsulating repetitive elements.
- Props are custom properties passed to React components to render dynamic content.
- Props allow components to receive data and render differently based on that data.
- HTML attributes and React props have similar concepts but differ in usage and flexibility.
