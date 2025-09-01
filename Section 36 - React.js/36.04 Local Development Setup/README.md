# \[Optional\] Local Development Setup

In the videos of this React module, I will be coding in **CodeSandbox**. Many students skip straight to React without going through the course and CodeSandbox is the easiest way to learn React with no complicated setup.

HOWEVER, if you really want to develop locally using **VSCode** then you can follow the steps below to work on the module locally. You will need to adapt to some differences between your code and what you see in the videos. But each lesson has downloadable .zip files for you to follow along.

**Step 1**. Make sure you have the latest version of Node installed. If not head over to [https://nodejs.org/en/download](https://nodejs.org/en/download) to download the LTS (Long Term Support) version of Node.

**Step 2**. Make sure you have the latest version of VSCode installed. If not, head over to [https://code.visualstudio.com/download](https://code.visualstudio.com/download) to download the version for your platform.

**Step 3**. Open a Terminal or command prompt and navigate to the directory where you want to create your React project. (We covered how to do this in previous parts of the course, if this is confusing, I recommend skipping this lesson and continuing with the videos and using CodeSandbox).

**Step 4**. Create a Vite app by running the following command in your Terminal or Command Prompt:

`npm create vite@latest my-react-app --template react`

**Step 5**. The first time, you won't have Vite installed. Type `y` to proceed. Then you'll be asked to select a framework. Use your down arrow to select React.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_13-15-11-9557846cc2b9dfbccd0741886b0fe9ba.png)

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_13-15-12-0ec5066ab25140bbe919a2d643405c44.png)

**Step 6**. You'll be asked to select a variant, select Javascript.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-09-55-88e3bf263d89158e389fa47cc523e409.png)

Then wait for the installation to finish, this will take a few minutes.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-09-55-024522939f56f64d3386e0105f2e488c.png)

**Step 7**. Change directory to the new app that you built.

`cd my-react-app`

**Step 8**. Install dependencies:

`npm install`

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-09-55-eb0a80baf969cd333fa71077a350b8ec.png)

When npm has installed all the necessary packages, open your project folder in VS Code. You should see a node modules folder:

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-09-56-b6750ea124a168f79552a930ad0e803d.png)

**Step 9**. Start the development server:

`npm run dev`

Vite will compile your code every time your change anything and you can see the location of your development server in the output.

Step 10. Open the app in your browser by heading over to the local address shown. It's usually at <http://localhost:5173/>

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-09-56-3db8120a6883d3027b9582417d6168ae.png)

You can now work on this local version and Vite will automatically recompile your code as you make changes.

![img](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-03-12_14-09-56-851068f761294f8face494ef189a8149.gif)

Again, I recommend following the videos and using CodeSandbox, but if you are more advanced and prefer to develop locally then you should now be ready to adapt the video code to your local version.
