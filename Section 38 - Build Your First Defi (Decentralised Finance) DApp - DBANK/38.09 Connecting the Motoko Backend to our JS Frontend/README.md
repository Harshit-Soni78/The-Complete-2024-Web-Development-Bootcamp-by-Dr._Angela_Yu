# Connecting the Motoko Backend to our JS Frontend

## Connecting the Motoko Backend to our JavaScript Frontend

In the previous lesson, we created our frontend using HTML and CSS, and we have our Motoko backend code set up. Now, we need to establish the bridge between the two, which is our `index.js` JavaScript code. This code will instruct the frontend on how to interact with the backend.

To expose the important parts of the Motoko code to our `index.js`, we must import the `dbank` module. We do this by writing:

```js
import { dbank } from "../declarations/dbank";
```

Here, we use a relative path to access the declarations folder, which exposes our Motoko code to JavaScript in a way that JavaScript can understand and call these functions. This acts as a bridge between the two languages, allowing us to call functions like `checkBalance`, `compound`, `topUp`, and `withdrawl`.
