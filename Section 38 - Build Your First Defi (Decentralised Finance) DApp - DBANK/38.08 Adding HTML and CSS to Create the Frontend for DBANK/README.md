# Adding HTML and CSS to Create the Frontend for DBANK

## Introduction to the Front-End for DBank

Now that we have completed writing the Motoko code and finished the back-end for this decentralized finance (DeFi) application, it is time to focus on what the user will see — namely, the front-end of this application.

By default, every new project created on the Internet Computer Protocol (ICP) using the template generates a set of assets, including a Dfinity logo, an `index.html`, and an `index.js` file. From the HTML code, it is evident that this is just the same "hello world" example seen when first setting up ICP development.

Currently, the front-end for our Dbank looks like this basic template, which does not allow us to use any of the functionality created in our back-end. Therefore, we need to remove the template and replace it with our own code. This is what we will create today: a front-end hooked up with our Motoko back-end that can update the balance, allow topping up, withdrawing, and utilize our Motoko code.

The first step is to delete everything inside the `index.html`, `main.css`, and `index.js` files. We will replace all three parts of our front-end with new code.

In the course resources for this lesson, you can download files named `Index` and `Main`. These files have had their extensions removed and are saved as text files to prevent them from opening directly in a browser. Copy the content of the `Index` file into `index.html` and the content of the `Main` file into `main.css`. This will provide us with some basic front-end code.

Since we have already covered HTML and CSS extensively in this course, we will not type out all the code from scratch. However, it is important to understand what the code does. The HTML contains a container with a logo, a display for the current balance, and a form with two input fields: one for the deposit amount and one for the withdrawal amount, followed by a submit button. The CSS styles these components in a simple and clean manner.

Next, we will work on the `index.js` file. Unlike the HTML and CSS, we will not simply copy and paste code here because it is crucial to understand how to connect the front-end with the back-end. This connection is essential for the application to function properly.

To view and develop the front-end as we progress, open a new terminal and ensure you are inside the `dbank` project directory. Run `npm install` to install all required packages. You can check the dependencies in the `package.json` file, which should be minimal.

Next, start the local Internet Computer simulator by running `dfx start`. In a new terminal, deploy the canisters using `dfx deploy`. Even if you have deployed before, it is good practice to redeploy after making changes to update the canisters. Finally, run `npm start` to spin up the web server and view the current website.

At this point, the logo is broken because it has not been added yet, but the CSS and HTML are correctly placed. None of the functionality will work yet because there is no JavaScript code to define the behavior.

To fix the logo, download the provided logo file from the course resources and drag it into the `assets` folder, the same folder where the existing `logo.png` is located. You may delete the default Dfinity logo to avoid confusion, leaving only the new logo for the project.

If you want to create your own logo, you can use free online logo makers. For example, by typing the product name, selecting fonts, sizes, styles, colors, and optionally adding a slogan or related icons, you can generate AI-created logo options. You can download the logo by signing up for the free service or alternatively take a screenshot and crop it to the desired size. This is how the Dbank logo was created.

After adding the logo to the assets folder, save your changes and refresh the local website. The logo should now display correctly. With the HTML and CSS complete, the next step is to connect the front-end with the JavaScript code to interact with the Motoko back-end.

## Key Takeaways

- The default ICP project template includes basic assets like a Dfinity logo and simple HTML/JS files.
- To create a functional front-end for the Dbank application, the default template files must be replaced with custom HTML, CSS, and JavaScript.
- The front-end consists of a container with a logo, current balance display, input fields for deposit and withdrawal amounts, and a submit button.
- Setting up the development environment involves installing dependencies with npm, starting the local ICP simulator with `dfx start`, deploying canisters with `dfx deploy`, and running the web server with `npm start`.
- Adding a custom logo enhances the UI, which can be created using free online logo makers or by using screenshots.
- The next step after setting up HTML and CSS is to connect the front-end with the Motoko back-end using JavaScript.
