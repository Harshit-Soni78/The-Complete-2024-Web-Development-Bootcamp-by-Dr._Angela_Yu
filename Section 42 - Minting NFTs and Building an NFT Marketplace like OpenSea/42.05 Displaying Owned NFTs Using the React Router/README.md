# Displaying Owned NFTs Using the React Router

## Introduction

In the previous lesson, the user interface for minting NFTs was created, allowing for the programmatic creation of new containers, each containing a unique non-fungible token. Once minted, the loader functioned correctly, and the frontend was formatted to display the newly created NFTs. After the backend canisters are created, the data can be pulled in and shown to the user.

## Viewing Minted NFTs

When minting multiple tokens, it is important to provide a way to view all of them. This is accomplished within the 'My NFTs' tab, which should display a gallery of all NFTs owned or minted by the user. At this stage, the NFTs owned are the same as those minted, as that is currently the only way to acquire NFTs.

## Setting Up Navigation with React Router

To enable navigation, React Router is used to route between different pages and display the appropriate content. The navigation is set up by rendering the Header component and adding code to direct the user to different routes based on button clicks. The `react-router-dom` dependency is included in the `package.json`, providing useful utilities for routing.

```js
import { BrowserRouter } from "react-router-dom";
```

The `BrowserRouter` is imported from `react-router-dom` and wrapped around the entire div in the Header component. This enables the definition of links, which can be wrapped around text to turn them into navigable links. Each link has a `to` attribute specifying the route to render.

```js
import { Link } from "react-router-dom";
```
