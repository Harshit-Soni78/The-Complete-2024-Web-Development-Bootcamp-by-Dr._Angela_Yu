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

## Backend Data Structures for NFT Ownership

To display all NFTs owned by a user, the backend code in `main.mo` is updated. When minting a new NFT, a data store is set up to track which NFTs were minted and who the owners are. This is accomplished using a HashMap.

```mo
    import HashMap "mo:base/HashMap";
```

```mo
    var mapOfNFTs = HashMap.HashMap<Principal, NFTActorClass.NFT>(Principal.equal, Principal.hash);
```

Each new NFT is added to the `mapOfNFTs` HashMap, with the Principal as the key and the NFT as the value. Additionally, a `mapOfOwners` HashMap is created to map owner Principals to a list of NFT Principals they own. The List type is imported to facilitate this.

```mo
    import List "mo:base/List";
```

```mo
    var mapOfOwners = HashMap.HashMap<Principal, List.List<Principal>>(Principal.equal, Principal.hash);
```

A private function `addToOwnershipMap` is defined to add a newly minted NFT to the owner's list. It retrieves the existing list, updates it, and stores it back in the HashMap. If the owner is new, an empty list is initialized.

```mo
    private func addToOwnershipMap(owner: Principal, nftId: Principal) {
      let ownedNFTs: List.List<Principal> = switch (mapOfOwners.get(owner)) {
        case null => List.nil<Principal>(),
        case (?result) => result
      };
      let updatedNFTs = List.push(nftId, ownedNFTs);
      mapOfOwners.put(owner, updatedNFTs);
    }
```

The `addToOwnershipMap` function is called after minting a new NFT, passing in the owner's Principal and the new NFT's Principal.

## Fetching Owned NFTs for the Frontend

A public query function `getOwnedNFTs` is created in `main.mo` to fetch the list of NFT Principals owned by a user and return them as an array for use in the frontend.

```mo
    public query func getOwnedNFTs(user: Principal): async [Principal] {
      let userNFTs: List.List<Principal> = switch (mapOfOwners.get(user)) {
        case null => List.nil<Principal>(),
        case (?result) => result
      };
      return List.toArray(userNFTs);
    }
```

## Integrating Backend with Frontend

In the frontend, the `opend` canister is imported, and an asynchronous function `getNFTs` is defined to call `getOwnedNFTs` and retrieve the user's NFT IDs. The Principal of the current user is used, which is defined as a constant for simplicity.

```js
import opend from "../../declarations/opend";
import { CURRENT_USER_ID } from "../../index.jsx";
```

```js
async function getNFTs() {
  const userNFTIds = await opend.getOwnedNFTs(CURRENT_USER_ID);
  console.log(userNFTIds);
}
```

The `getNFTs` function is triggered when the component is rendered, using the `useEffect` hook. The retrieved NFT IDs are then passed to the Gallery component for rendering.

```js
useEffect(() => {
  getNFTs();
}, []);
```

## Rendering the NFT Gallery

The Gallery component is updated to accept the list of NFT IDs as props and render each as an Item component. The `useState` hook is used to manage the gallery state, and the `map` function is used to render each NFT.

```js
const items = props.ids.map((NFTId) => (
  <Item id={NFTId} key={Principal.toText(NFTId)} />
));
```

The Item component expects the id prop, which is the Principal of the NFT. The key prop is set to the text representation of the Principal to uniquely identify each item. The useEffect hook is used to trigger the fetching and rendering of NFTs when the component mounts.

## Ensuring Dynamic Updates

To ensure the gallery updates immediately after minting a new NFT, the `forceRefresh` attribute is added to the BrowserRouter. This causes the Header to refresh, triggering the useEffect and fetching the latest NFTs.

```js
    <BrowserRouter forceRefresh={true}>
```

Now, after minting a new NFT, navigating to 'My NFTs' forces a refresh and displays the newly minted NFT in the gallery as expected.

## Conclusion

All NFTs owned by the user are now displayed in the gallery, and the system dynamically updates after minting new tokens. The next step in the project will involve setting up NFTs for sale and listing them on the Discover page.

## Key Takeaways

- Implemented navigation between NFT minting, discovery, and collection using React Router.
- Set up backend data structures in Motoko to track NFT ownership and minting.
- Developed functions to fetch and display all NFTs owned by a user in the frontend gallery.
- Ensured dynamic updates and proper rendering of NFT collections after minting new tokens.
