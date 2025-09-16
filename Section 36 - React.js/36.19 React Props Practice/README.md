# React Props Practice

In this lesson, you will put all of your knowledge learned so far into practice by completing a series of challenges to create a contact list app.

As seen in the preview, the app is not looking quite right. The first task is to fix the CSS styles by going into the App.jsx file and applying the necessary class names. Be sure to review the styles.css file to understand the available class names. You can compare your current app against the completed version at the provided address to figure out the correct CSS styles to apply and achieve the same look.

The next step is to extract the contact card as a reusable Card component. Currently, the contact card exists inside the App.jsx file within the card div. After extracting it, you will use what you learned about props to render the default Beyonce card by deleting all hard-coded information and instead passing it as properties from App.jsx to the custom Card component.

Finally, you will use the contacts.js file, which contains pre-populated contact details including images found online. Feel free to replace these with your own information if you wish. By the end, you should have a contact app displaying three cards, each with different contact information but effectively repeating the same element created using React.

Pause the video now, fork the sandbox, or download it as a zip file to use your local editor and attempt this challenge.

Let's walk through the solution together. The first step was to apply CSS styles to the App.jsx component so it starts to look more like the completed version. Notice that the name "Beyonce" looks different in color and position.

Inside the CSS file, there is a class called `name` which changes the font size, color, and adds margin to separate it from other components. Applying this class to the h2 element in App.jsx makes the name larger, changes its color, and moves it away from the card's edge.

Next, fix the image to make it circular with a border. The class `circle-img` changes the border-radius to 50%, adds a white border, and other styling to achieve this effect. Adding this class to the img element and refreshing the app displays a circular avatar image.

Finally, update the two paragraph lines containing contact information. The CSS class `info` changes their color and adds margin. Adding this class to these paragraph elements updates their appearance to match the completed version.

With these CSS changes, the Card component now looks exactly like the completed version. This completes step 1.

Step 2 is to extract the contact card as a reusable Card component. React encourages extracting components into smaller, reusable blocks. Everything inside the div with class name `card` corresponds to the card being rendered. The only remaining elements are the parent div and the h1 heading.

Create a new file inside the components folder named `card.jsx`. Inside, define a new Card component that returns the copied card div content. Export this component as the default export named Card.

In App.jsx, import the Card component from "./card" and add it as a custom React component using Pascal casing with a self-closing tag. The Beyonce card will now render as before.

Step 3 is to use props to render the default Beyonce contact card dynamically. This allows the Card component to be reusable rather than always rendering Beyonce's information.

Review the Card component to identify parts that are custom to each contact, such as the name, image source, telephone number, and email. Create these as properties on the Card component by passing them as attributes when creating the Card element in App.jsx.

For example, pass `name="Beyonce"`, `img="..."`, `tel="..."`, and `email="..."` as props to the Card component. Then, delete the hard-coded values inside the Card component and replace them with references to `props.name`, `props.img`, `props.tel`, and `props.email` respectively. Remember to enclose these JavaScript expressions in curly braces `{}` inside JSX.

To access these props inside the Card component, use the input parameter `props`. By convention, this parameter is named `props`, but it can be named anything. Use `props.name`, `props.img`, `props.tel`, and `props.email` to render the dynamic content.

This completes step 3, making the Card component reusable with dynamic data passed via props.

The final step is to use the `contacts.js` file to create Card components instead of typing them manually. This file contains an array of JavaScript objects, each representing a contact with properties such as name, imgURL, phone, and email.

Export the contacts array as the default export from `contacts.js`. In App.jsx, import this contacts array and use it to create Card components dynamically by accessing properties like `contacts[0].name`, `contacts[0].imgURL`, and so on.

For each contact, create a Card component passing the respective properties as props. Copy and adjust the index to render multiple cards. This results in an app displaying all contacts with their details in individual cards.

This approach saves effort by creating custom components using React. Although manually indexing each contact can be tedious, upcoming lessons will introduce methods like map, filter, and reduce to handle this more efficiently.

For now, focus on understanding props and how to pass data to custom components, then access those properties inside the component to render customized content.

In the next lesson, you will learn about React development tools that help visualize the app structure and inspect current property values.

## Key Takeaways

- Applied CSS styles by adding appropriate class names in App.jsx to fix layout and appearance.
- Extracted the contact card into a reusable Card component to promote modularity.
- Used React props to pass dynamic data such as name, image, telephone, and email to the Card component.
- Imported contact data from an external contacts.js file and rendered multiple Card components with different data.
