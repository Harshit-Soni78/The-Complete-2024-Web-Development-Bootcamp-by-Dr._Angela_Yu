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

## Defining Routes and Switch

A `Switch` component is used to determine which route was triggered and to render the appropriate React component. The `Switch` and `Route` components are also imported from `react-router-dom`.

```js
import { Switch, Route } from "react-router-dom";
```

Four routes are defined: one for the home page, and one each for Discover, Minter, and Collection. The `path` attribute matches the route, and the corresponding component is rendered. For example, the root path renders the main image, while the Discover route displays a heading, and the Minter and Collection routes render their respective components.

```js
    <Route exact path="/">
      <img ... />
    </Route>
    <Route path="/discover">
      <h1>Discover</h1>
    </Route>
    <Route path="/minter">
      <Minter />
    </Route>
    <Route path="/collection">
      <Gallery />
    </Route>
```

The `exact` keyword is added to the root route to ensure it only matches the exact string and does not interfere with other routes. A link is also added to the root route, wrapping the relevant text or heading.
