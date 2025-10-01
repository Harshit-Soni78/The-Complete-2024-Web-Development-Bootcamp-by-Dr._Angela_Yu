# React Dependencies & Styling the Keeper App

## Introduction to Styling the Keeper App

Now that most of the functionality is complete, the next step is to tidy things up and improve the appearance of the app. The end result aimed for, after all the styling, includes icons, expanding input features, button hover effects, and a patterned background.

## Preparing the Project for Styling

To create these effects, pre-built components will be used by adding dependencies. It is recommended to use the provided starting project or download a fresh copy if working locally, as there are changes in `styles.css` and a className added to the form in `CreateArea`. Without these, the UI may look different from the intended design. Fork the starting project to ensure consistency.

## Adding Material-UI Dependencies

The first dependency to add is Material-UI. Click on the Add Dependency button and search for Material-UI. Both the core component and the icons component are needed: `@material-ui/core` and `@material-ui/icons`. If working locally, these can be installed using npm as shown in the documentation.

Material-UI provides React components that are pre-built, allowing for customization of functionality and appearance. This enables faster app creation using Google's Material Design concept.

## Using Material-UI Icons

Navigate to the components list to find icons. Since `@material-ui/icons` and `@material-ui/core` are installed, icons can be imported and used as React components. For example, to use a delete icon, import `DeleteForeverIcon` from `@material-ui/icons/DeleteForever` and use it as a component.

### Replacing the Delete Button with an Icon

Change the DELETE button from text to an actual delete icon from Material-UI. Search for a suitable delete icon, copy the import statement, and use it in `Note.jsx` instead of the hardcoded text.

```jsx
import DeleteIcon from "@material-ui/icons/Delete";
```

```jsx
<DeleteIcon />
```

Now, creating a new note displays a trash bin icon. Using React components for icons is beneficial because JavaScript, CSS, and HTML are combined in each component, allowing for additional functionality without extra code.

## Adding an Add Icon to the Button

To change the Add button from text to an icon, search for an appropriate add icon, copy the import statement, and add it to `CreateArea`. Replace the word Add with the `AddIcon` component.

```jsx
import AddIcon from "@material-ui/icons/Add";
```

```jsx
<AddIcon />
```
