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

After refreshing, a large add sign appears. Using the icon allows it to scale up, unlike a simple plus sign. In the final version, the add button is fancier, changing color on hover and animating when expanded.

## Using the Floating Action Button (Fab)

Instead of a standard HTML button, use the Floating Action Button (Fab) from Material-UI. This button changes color on hover and supports animation. Import the Fab component and use it in `CreateArea`.

```jsx
import Fab from "@material-ui/core/Fab";
```

```jsx
<Fab>
  <AddIcon />
</Fab>
```

If the icon does not appear as expected, ensure the correct stylesheet and className are applied to the form. Copy the stylesheet from the starting project and update the form in `CreateArea` with the correct className to apply consistent styling.

## Adding Animation with the Zoom Component

To animate the Fab button, wrap it inside a Zoom component from Material-UI. Import the Zoom component and use it with the `in` prop set to a boolean value. If `in` is true, the component transitions in; if false, it does not.

```jsx
import Zoom from "@material-ui/core/Zoom";
```

```jsx
<Zoom in={isExpanded}>
  <Fab>
    <AddIcon />
  </Fab>
</Zoom>
```

Refreshing the app now shows the Fab button zooming in with animation. To further enhance the UI, display the content input by default, and only show the title input and zoomed-in button when the content input is clicked. This can be achieved with conditional rendering.

## Implementing Conditional Rendering for Expansion

To manage expansion, create a state variable to track whether the `CreateArea` is expanded. Use `useState` to create `isExpanded` and `setExpanded`, initializing `isExpanded` to false. When the textarea is clicked, call a function to set `isExpanded` to true.

```jsx
const [isExpanded, setExpanded] = useState(false);

function expand() {
  setExpanded(true);
}
```

Add an `onClick` handler to the textarea to call the `expand` function. Conditionally render the title input only if `isExpanded` is true. The textarea should start with one row and expand to three rows when expanded.

```jsx
    {isExpanded && <input ... />}
    <textarea rows={isExpanded ? 3 : 1} ... onClick={expand} />
```

The Fab button should also only appear and zoom in when `isExpanded` is true. Use the `isExpanded` property for the Zoom component's `in` prop.

## Adding a Highlight Icon to the Header

To add a highlight icon to the Keeper title, copy the import statement for the highlight icon and use it inside the header's `h1` tag.
