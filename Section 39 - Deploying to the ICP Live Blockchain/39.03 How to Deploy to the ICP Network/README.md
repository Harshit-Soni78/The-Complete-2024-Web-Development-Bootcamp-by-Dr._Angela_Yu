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

## Accessing the Deployed Application

To retrieve the canister ID for your deployed assets, use the following command:

```bash
    dfx canister --network ic id dbank_assets
```

This will provide a canister ID, which you can enter into your browser. The structure of the URL is as follows:

`https://<canister-id>.ic0.app`

Once you navigate to this address, you will be able to see your live deployed `dbank` application. This URL can be shared with anyone who has internet access.

## Testing and Live Computation

Try topping up your application with some money to verify that it is working. The computations are now happening live on the Internet Computer.

## Monitoring Cycle Usage

If you return to your Cycles Wallet and refresh it, you may need to log in again. You will notice that the initial balance, for example, 14 tera cycles, will have decreased. This is because deployment is one of the most expensive parts of using Dfinity.

To conserve cycles, be careful when deploying new canisters. Updating an existing canister is different and less costly.

## Upgrading an Existing Canister

If you make a small change, such as commenting out two lines of code and saving, you can deploy again using the same command:

```bash
    dfx deploy --network ic
```

This time, instead of creating a new canister, you will see a message stating, "All canisters have already been created." It simply upgrades the code for that canister, which does not cost much in terms of cycles.
