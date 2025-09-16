# React DevTools

In this lesson, I will demonstrate how to separate a React app into smaller, more specialized components. Along the way, we will learn how to use the React Developer Tools to help debug and manage these components.

To begin, I have a copy of the website from the end of the previous code challenge. Please fork this starting project, and we will start by splitting out some of our components.

Notice that in our Card component, there are elements that might work better as single components because we may want to reuse them in the future. One obvious choice is the avatar image, as other parts of the website might also need a circular image with a white border.

It makes sense to create a custom component and separate out this image. To do that, we will extract the `img` element and create a new file called `Avatar.jsx`. We will add the boilerplate code and return this `img` element from the `Avatar` function.

Let's cut the `img` element out of the Card component and place it inside our `Avatar()` function. Then, in `Card.jsx`, we import the `Avatar` component and replace the original `img` element with it.

At this point, our app breaks because the `img` element had its `src` set as `props.image`, but in the new `Avatar` component, we have not yet added props inputs or passed any properties to it.

Pause and consider how to pass the `img` property to the newly created `Avatar` component to resolve these errors.

In our Card component, we receive properties from `App.js` such as `name`, `img`, `tel`, and `email`. The `img` property corresponds to the `imgURL` from `contacts.js`, which is the URL we want to insert into the `Avatar` component's `img` element's `src` attribute.

We need to pass this property down two levels: from `App` to `Card`, and then from `Card` to `Avatar`. This can become confusing when many properties and components are involved.

We can inspect the props passed to components using the React Developer Tools. This tool shows the React DOM tree instead of the entire HTML DOM tree, allowing us to see components like `App`, `Card`, and `Avatar` and the props passed to each.

For example, clicking on a `Card` component in React DevTools shows all the props it receives and the component that rendered it. This helps identify the names and values of props to use inside HTML elements.

CodeSandbox's React DevTools can be buggy, so it is recommended to install the official React Developer Tools extension for Chrome or Firefox. This extension integrates with the browser's developer tools and provides a dedicated Components tab showing the React component tree.

After installing the React Developer Tools extension, refresh your website. The Components tab will display your React component tree, with color indicators showing whether React is in development or production mode.

Within the Components tab, use the React component selector tool to select components on the page. For example, selecting an `Avatar` component highlights it in the tree and shows its props, such as the `img` URL.

React Developer Tools also work on other websites built with React. For instance, inspecting airbnb.com reveals its React component tree and props, demonstrating the tool's utility beyond your own projects.

React Developer Tools make debugging easier. For example, if the `Avatar` component expects a prop named `img` but you mistakenly use `imgURL`, the image will not display. Using React DevTools, you can inspect the props and identify the correct property name to fix the issue.

React Developer Tools filter out native HTML elements like `div` and `h2` by default, showing only React components. This keeps the tree cleaner. You can toggle this filter in the settings if you want to see all elements.

Another helpful feature is the ability to view the source code of a component directly from React DevTools. You can also edit prop values on the fly to test changes in your app.

When creating reusable React components, it is important to plan your component structure or tree. For example, the paragraph elements representing details in contact cards are used multiple times. When you find yourself repeating the same element with the same styling, it is a good idea to create a separate component with props to render custom information.

As a challenge, create a custom `Detail` component to replace the two paragraph tags for telephone and email. Pass the different pieces of information as props and use React DevTools to inspect and verify the props.

The final result replaces the paragraph tags with `Detail` components. Each `Detail` component receives a single prop called `detailInfo`, set to the telephone number or email. Inside the `Detail` component, use `props.detailInfo` to render the information.

Create a new file called `Detail.jsx`. Paste the paragraph tag as a template, create the `Detail` component as a function, add `props` as an input parameter, and export it as the default. Return a single paragraph element displaying `props.detailInfo`.

Import the `Detail` component into `Card.jsx` and replace the original paragraph tags with `Detail` components. If the details do not show up, use React DevTools to inspect the props passed to `Detail`. Ensure the prop name matches `detailInfo`.

After correcting the prop name to `detailInfo` inside the `Detail` component, the details display correctly. Now, we have two `Detail` components, each receiving props for telephone and email, rendered as separate components.

This approach allows us to split our website into smaller components, creating a palette of components that can be customized and reused as needed. For example, if we need a calendar component, we can create it once and reuse it with different data.

This is the power of React: making front-end development faster and easier. For instance, even though `Avatar` components are nested inside cards by default, we can also add an `Avatar` image directly in the `App` component, just below the "My contacts" heading.

To do this, import the `Avatar` component into `App.jsx` and insert it where desired. Provide the `img` prop with the image URL. For example, copy your own image address and pass it as the `img` prop to the `Avatar` component.

Now, the `Avatar` component appears at the top level of the app, above all the cards, with all styling and functionality intact. This demonstrates how reusable components can be used flexibly throughout your app.

The React Developer Tools make it easy to inspect the component tree, view props, find components, view source code, and debug your React apps. We will continue using these tools as we develop more complex React applications.

In the next lesson, we will address repetitive code in our app, such as hard-coded references like `contacts[0].name` and `contacts[1]`. We will learn how to use mapping to simplify code by iterating over data instead of hard-coding values.

For all of that and more, I will see you in the next lesson.

## Key Takeaways

- React apps can be broken down into smaller, reusable components for better specialization and maintainability.
- The React Developer Tools provide a visual component tree and props inspection, aiding in debugging and understanding component hierarchies.
- Passing props through multiple component levels requires careful management, which React DevTools can help clarify.
- Creating reusable components like Avatar and Detail improves code organization and reduces repetition.
