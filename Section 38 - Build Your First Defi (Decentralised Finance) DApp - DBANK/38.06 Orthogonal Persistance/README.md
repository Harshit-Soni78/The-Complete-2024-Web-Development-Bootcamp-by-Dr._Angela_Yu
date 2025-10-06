# Orthogonal Persistence

In this lesson, I want to cover a pretty important topic in terms of developing on the Internet Computer Protocol (ICP), which is the idea of orthogonal persistence.

The idea of persistence is being able to hold on to state over many different cycles and updates.

For example, if we had our canister and we created a variable, let's call it `a`, and set it equal to 42, which is the meaning of life and everything.

Now, if I decide to increment `a` by 5, at this point, the state that's held inside the container `a` is equal to 47.

This is the state, but what happens once I update the code and rerun the canister or redeploy it?

In a normal situation, unless we explicitly tell it to add 5 to `a` again, the variable `a` is going to be reset to its original state.

Now, in a canister on ICP, that does not have to happen. Instead, it can actually hold on to the state of your variables, your collections, your objects, basically the entire state of your container.

The reason why it's called orthogonal is because we as developers do not even have to think about it. It can happen just behind the scenes as a function of the way that the Internet Computer is created.

I want to show you this in a normal situation. Here, I've got a CodeSandbox open and I'm just writing some JavaScript code.

We're going to say `var a = 15;` and now if I decide to `console.log(a);`, you can see that the state of `a` is 15. Our `console.log` is basically a way for us to expose the state to be printed out so that we can actually see it because we are not the computer; we're not inside the box.

Now, as I said, I'm going to increment `a` by 5 using `a += 5;`. So now the state of `a` at line 9 is no longer 15, and if I go ahead and just copy this line of code here, you can see at this point it's now 20. We've added 5 to it.

Here's the interesting thing: if I go ahead and get rid of this `a += 5;` and reload our sandbox, then you can see that the state of `a` has been completely restored to the beginning. It is not held on to the fact that it turned 20 and instead goes back to being 15.

This is how normal programs work and this is something that we're used to. In order to hold on to state in between these cycles, we actually have to use data persistence, which involves databases and putting things in databases, taking things out of databases, etc.

Let me show you what we can do using orthogonal persistence. Firstly, here you can see that we've got our `currentValue` set to 300, and I'm going to go ahead and comment out this line of code because this line says `currentValue` should be set to a new value of 100, which we don't want. We actually just want to create a new variable that holds the number 300.

If I go ahead and hit Save and deploy, and go over to my Candid UI, we can use our previous `checkBalance` method to quickly query what is the value of the `currentValue`, which is 300.

Nothing special there. Now, if we go back and I go ahead and top up the value by adding 100 and hit CALL, and then once that's done, we hit QUERY, you can see it is now increased by 100 to 400. So from 300 to 400.

At this point, if I go ahead and just change some minor thing in my code, let's say we add a new line like `Debug.print`, it doesn't really matter what you do as long as it's something that actually requires the container to update, and then we deploy our canister again.

If we come back and hit QUERY again, you can see that it gets reset back to 300. This is the normal behavior that we saw with other programming languages as well.

However, we can actually add persistence to our code with just a single keyword. We can add the word `stable` in front of the variable declaration, and this turns the variable into a persisted variable.

So it's a stable variable now. Previously, without the `stable` keyword, this was what they call a flexible variable. Because in normal programming, it's not very usual for state to be persisted across update cycles, the default is still a normal variable that you would get in any other programming language.

But adding the `stable` keyword now upgrades our variable to an orthogonally persisted variable.

Let's hit Save, deploy again, go back to our Candid UI, and see what happens this time. The query starts out at 300. Now let's top it up by 100, so now it's up to 400. Remember that number? That's the state of this variable.

Again, let's change some line of code and force our container to deploy again to update the container. We hit Save and deploy again. This is basically the same as hitting refresh on our CodeSandbox or simply getting the process to stop and restart.

Now that we've deployed our canister, if I go ahead and hit QUERY, you see it has held on to the state of that variable. It still knows that it should be 400, which means that this state can now be used across all update cycles.

I don't have to worry about databases. I don't have to think about how I am going to get this number in or how I am going to get it out. I just have to keep programming, and with my stable variable, it will be persisted across any sort of update or downtime. If the electricity goes out, it will restore it to the previous state.

If you're wondering why I commented out the line that sets `currentValue` to 100, this is because the equals operator is a replace operator. Whenever this code runs, it doesn't matter what the state of `currentValue` is; it will actually update it to whatever is on the right-hand side of the equals sign.

Our stable variable can be declared with an initial state, but the next time the code runs and it hits this assignment, it will set it to whatever this value is. So we have to comment it out in order to see the stable variable in action.

This is a really magical way of programming applications, which we will see more and more in the coming lessons. This was just a little taster, and I really want you to try it out for yourself, mess around with it, and see if you can get it to work for yourself. Really wrap your head around it by tweaking it, changing it, and seeing it with your own eyes.
