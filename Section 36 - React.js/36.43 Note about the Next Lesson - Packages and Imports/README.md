# Note about the Next Lesson - Packages and Imports

## Quick note about the next lesson: React Dependencies & Styling the Keeper App

In the next lecture, we’ll be using components from the Material UI (MUI) packages. The components being used in the lesson now need to be accessed via a different package name.

### **You should include the following latest packages in the package.json:**

```json
1. "@mui/icons-material": "^5.15.11",
2. "@mui/material": "^5.15.11",
3. "@emotion/react": "^11.11.4",
4. "@emotion/styled": "^11.11.0",
```

And in the `.jsx` files should import the icons and the components like so:

### **CreateArea.jsx**

```jsx
1. import AddIcon from "@mui/icons-material/Add";
2. import { Fab } from "@mui/material";
3. import { Zoom } from "@mui/material";
```

### **Header.jsx**

```jsx
1. import HighlightIcon from "@mui/icons-material/Highlight";
```

### **Note.jsx**

```jsx
1. import DeleteIcon from "@mui/icons-material/Delete";
```

This way you'll avoid any warnings and errors. This is also the code you'll see used in the downloadable completed projects.

### **Previous version of the code:**

This is the code you'll see in the video in the package.json. Use the new code above:

```json
1. "@material-ui/core": "4.6.1",
2. "@material-ui/icons":"4.5.1",
```

and in the .jsx files, you'll see these imports, but use the code from above instead:

#### CreateArea.jsx

```jsx
1. import AddIcon from "@material-ui/icons/Add";
2. import Fab from "@material-ui/core/Fab";
3. import Zoom from "@material-ui/core/Zoom";
```
