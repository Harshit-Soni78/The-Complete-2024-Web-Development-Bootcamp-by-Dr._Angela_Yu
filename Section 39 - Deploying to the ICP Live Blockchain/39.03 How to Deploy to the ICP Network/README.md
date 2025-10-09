# How to Deploy to the ICP Network

## Preparing for Deployment

Once cycles have been moved into the wallet and the wallet is linked, it is time to deploy the project. Ensure that you are inside the `dbank` project folder.

Run the following command to make sure all required packages are installed and up to date:

```bash
    npm install
```

If everything is already up to date, this process should only take a few seconds. Once completed, you can proceed to deploy the project.

## Deploying to the Internet Computer

To deploy, use the following command. This time, add the `--network` flag and specify the network as `ic` for the Internet Computer.

```bash
    dfx deploy --network ic
```

This process may take a few minutes. It will create a canister on the Internet Computer and deploy the contents of the `dbank` assets onto the live network.

Once deployment is complete, you will see a message indicating that canisters have been deployed. You can now view the live website on the internet.
