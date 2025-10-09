# How to Claim Free Cycles from Dfinity

## **How to Claim Free Cycles from Dfinity (Updated for 2024)**

You can follow the instructions below to get 10T of free cycles from Dfinity official. It is completely free but will involve some sign up and clicking around. You don't need cycles to complete the tutorials in this course, you can also run everything locally and learn the Web3 programming skills without needing to "publish"/"host" your DApps using cycles. If you still want to get the cycles, then follow the instructions below step by step.

**Step 1**. Head over to the official [**DFINITY Cycles Faucet**](https://faucet.dfinity.org/) page.

[https://faucet.dfinity.org/](https://faucet.dfinity.org/)

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-20-30-9a83b96b61d8e28b56f20aa59301b6e4.png)

**Step 2.** On the faucet page, click on **REQUEST CYCLES** and then click on **ACCEPT INVITE** to join the **ICP Developer Community** official Discord channel.

Note: If it says **UNABLE TO ACCEPT INVITE** you might not be logged in to Discord, log in first before you try to accept the invite. If you don't have a Discord account, you will need to first sign up for one. It's free and you can do it here: [https://discord.com/register](https://discord.com/register)

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-11_13-23-07-99aea4f69906492a88fa1f0626f02c42.png)

**Step3.** Once you've joined the ICP Developer Community on Discord, head over to the **#cycles-faucet** channel.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-11_13-23-07-e572724ed087d1400c1a6fa2ecc613d3.png)

**Step 4.** In the #cycles-faucet channel, click on the **COMPLETE** button to agree to the community rules.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-11_13-23-07-6d85cfa7cccbb4fa61c93e5eeb360130.png)

**Step 5.** Now type **/request** in the message box and hit send. This will activate the request bot.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-20-30-e02e28510c908352a8ea566e6d450f02.png)

**Step 6.** Choose from the drop down lists and complete the survey. (You can chose **Motoko** if you're asked which programming language you will use). Your responses in this survey does not affect the result. Chose any response that feels right to you.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-20-30-02ccdbf3a260f9f84b8bf8a5f5229cdc.png)

**Step 7.** Once you've complete the drop down questions from the faucet bot, you will get a popup form. Fill in this **Cycles Faucet Survey**. Note: You will need a GitHub account for this form. If you have not yet signed up to GitHub you can do so here: [https://github.com/join](https://github.com/join)

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-20-30-594eaae81aabc8371ee6262259f674c0.png)

**Step 8.** Once you've submitted the form, you should receive a DM fro the faucet bot with your coupon code. If you get any errors from the form, try again and if that doesn't work try  asking for help in that channel.

Note: Make sure your Discord settings allow you to receive private messages.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-20-31-40495de0457948264e5fcdef40d311a3.png)

**Step 9.** Now go back to the **Cycles Faucet page** and click Next, then paste in your **coupon code** you got from the faucet bot.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-11_13-23-08-a745b157944ddeeb06695a7272908970.png)

**Step 10.** Go into your Terminal and check that you have at least dfx 0.12.0 installed.

You can run this command to check your version: `dfx --version`

If your version is lower than 0.12.0 then you can upgrade to the latest version using the command: `sudo dfx upgrade`

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-20-31-42fb1320c9c571db5904fafe2761ebc7.png)

**Step 11.** Click next and you'll see the command you need to run in the Terminal to claim the free cycles using the coupon code you got earlier from the Discord Faucet Bot.

Command: `dfx wallet --network ic redeem-faucet-coupon <YOUR COUPON CODE FROM FAUCET BOT>`

**IMPORTANT**: Make a note of the **id of the wallet** that gets created from this step. Keep it safe, you will need it very soon.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-11_13-23-08-78d34d6a5dbef5f05ea49bf04e95681f.png)

**Step 12.** Finally you're on the last step of the cycles faucet page, you can copy and run the command  from the Cycles Faucet page to verify that you got your cycles.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-20-31-5dc04af0746ecdd35405b1b78bbfc6a3.png)

**Step 13.** From the Terminal change directory (cd) into your DBANK project and set the new wallet id to act as the source of cycles for the DBANK project using the following command:

`dfx identity --network ic set-wallet --force <YOUR WALLET ID>`

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-20-31-91d79fe8885c2e2e49ce234e8197df58.png)

**Step 14.** Register your device on ICP in order to view your wallet and cycles online. In the Terminal run the command: `dfx identity get-principal`

Once you get the principle id of your device, run the following command, replacing **wallet id** and **principle id** with your own ids.

`dfx canister --network ic call "<wallet id>" authorize '(principal"<principal id>")'`

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-20-31-0107f7a1fe99d8f25c82506b1a724766.png)
