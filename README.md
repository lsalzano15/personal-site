# Build Your Own Personal Site
_(from Scratch, for free, in about an hour 🎉 🎉 🎉 )_

This tutorial will get your hands a little dirty with some code so that you can end up with your own personal site. Try it yourself! Everything you need to get started is below. You don't need prior experience with code to do this. There's also a community of people here and online who can help at every turn :+1:

# Tutorial

This is a jumping off point for people who would like to have their own personal website built from scratch. In this case, from scratch means using code instead of using more visual editors online. You might be asking, why would we put ourselves through touching code instead of using visual editors? A couple reasons:

- Price 💰
    - The first reason is price. You can get something online for free, granted you're fine with a pretty random URL (mine looks like [arcane-retreat-46709.herokuapp.com](https://arcane-retreat-46709.herokuapp.com/)). This comes from [Heroku](https://www.heroku.com/), the free cloud provider we're using. You can pay Heroku for things like faster loading times, but for us the free tier will probably work! Then what's left is the [price of the domain name](https://domains.google/). You can get domains pretty cheap nowadays, as long as you're not too picky and a little bit creative! See for yourself! If you search a domain, the annual costs are still pennies on the dollar. For example, jordanbuzzell.com is 12$/year!

- Customizability 🕺 
    - The second motivation is customizability. We're building everything from scratch, so you have full reign over the HTML, CSS, Javascript, etc. Granted you follow the rules when it comes to licensing and giving credit where credit is due, you have access to the entire ecosystem of open source templates online. Take my personal example site:

![image](https://user-images.githubusercontent.com/41012778/80933506-082b0480-8d92-11ea-9957-5db91f3ba610.png)

:point_up: this was made using the ['Identity' template](https://html5up.net/identity) from [HTML5 UP](https://html5up.net/). As long as [proper credit is given](https://creativecommons.org/licenses/by/3.0/), this is free to use and modify. Licenses vary based on the template! So you have to be vigilent not to steal anyone's intellectual property. Beyond that, most of the work is just updating a template that you like to mirror your own vision! You are also entirely free to upload your own HTML, CSS, and JS files. **NOTE**: We won't go over how to code in HTML, CSS, JS, but we will go over some basics just so we can edit the templates.

# Setup Instructions


- Create [Github Account](https://github.com/join) (Free)
  - We'll keep all of our code in Github, and use github's command line tool to speed up shipping our code.
- Create [Heroku Account](https://signup.heroku.com/) (Free)
  - Heroku will be our “cloud application platform” (oooo fancy) but really it’s just gonna host / serve our website for us from the cloud.

### Helpful Resources:
- [Github Notes / Cheat Sheet](https://github.com/joor-jordanb/node-js-getting-started/wiki/Github-CheatSheet)
- [Command Line Notes / Cheat Sheet](https://github.com/joor-jordanb/node-js-getting-started/wiki/Command-Line-CheatSheet)

### Mac Prerequisites (Mac Only!!)

- Install [Homebrew](https://brew.sh/): we’ll use this to speed up some installations.

  - Open your Terminal (Applications -> Terminal)

    - To check if Homebrew is already installed, type `brew help` into your Terminal and press Enter. If it says `command not found`, then we need to install it. If it lists out the `help` documentation for brew, it is installed and you can skip to 'background on homebrew'

  - Copy the command from [the Homebrew home page](https://brew.sh/) into your Mac's Terminal, it should look something like:
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
  ```
  - Press Enter and wait, it will take a couple minutes to install. Once it completes, check if it's installed with `brew help`.

  - background on homebrew — it’s a package manager but they throw beer lingo in random places lol

    - It’s a command line tool that lets you install, uninstall, update packages (aka modules that other people have written so that you don’t have to :D )

- Use Homebrew to install Git
    - Check if Github is installed first. Go to your Terminal (Applications -> Terminal) and type `github --version`. If it lists out the github version, then it's installed. If you get `command not found`, do the following:
    ```
    $ brew install git
    ```
    - See how much easier that is than having to go to Chrome -> Github -> Download Github -> Finder -> Install Github ?? This is the beauty of package managers like Homebrew and NPM (we'll use this later).

- Use Homebrew to install Heroku
    - Same deal as with github:
    ```
    $ brew install heroku
    ```
    - Check if it's installed with `heroku --version`

- Use Homebrew to install Node
    ```
    $ brew install node
    ```
    - Check if it's installed with `node --version`

### Windows Prerequisites (Windows Only!!)
- [Install Github](https://git-scm.com/download/win)
  - Download the Installer and follow the instructions to install github on your Windows.
  - Open the Git Shell
  - Type `git --version` to doublecheck that it's installed properly.

- [Install Heroku](https://cli-assets.heroku.com/heroku-x64.exe)
  - Download the Installer and follow the instructions to install Heroku on your Windows.
  - Open Windows Power Shell and use `heroku --version` to check that it's installed properly

- [Install Node](https://nodejs.org/dist/v12.16.2/node-v12.16.2-x86.msi)
  - Download the Installer and follow the instructions to install Node on your Windows.
  - Open Windows Power Shell and use `node --version` to check that it's installed properly

## Steps

### Fork this Repo! (This will make your own copy on Github)

- At the [top of the page for this repo](https://github.com/joor-jordanb/personal-site), select the "Fork" button. This will make a copy of the code here underneath your account.

![image](https://user-images.githubusercontent.com/41012778/80934461-462a2780-8d96-11ea-86a8-a8283d0aef6c.png)

- This will bring you back to your github account where you now have your own personal copy of the getting started project.

### Clone the Repo! (Make your own copy on your Computer)

- On **your repo** click the 'Clone or Download' dropdown and then copy the URL to your clipboard (see below)

![image](https://user-images.githubusercontent.com/41012778/80934768-ac637a00-8d97-11ea-984d-4a6c3b34017a.png)

- Go to your Terminal and type the following:
  - Note -- you'll want to navigate in your Terminal / Command Prompt to a directory (folder) where your project can live long-term. See the Command Line Notes / Cheat Sheet for more info.

```
$ cd <the folder you want to put everything in>

$ git clone <your repo's URL>

$ cd personal-site

```

### Deploy the App locally

- To test out what this thing looks like without having to actually put it online, we can do what's called 'deploying the app locally'. This means running the application on your computer as the server. In your command line, inside of the `node-js-getting-started` folder:

```
$ npm install
$ npm start
```

- go to `http://localhost:5000` in your browser to test if it’s working, you should see:

![image](https://user-images.githubusercontent.com/41012778/80935134-3a8c3000-8d99-11ea-8a2b-5260447d3180.png)

### Subbing in a Template
Now is the hardest part -- picking a template that works for you!

**NOTE (IMPORTANT)** - Make sure not to steal anyone's intellectual property. Here we'll talk about licensing and giving credit where credit is due, especially for these HTML + CSS templates.

From [templated.co]()s FAQ page:
![image](https://user-images.githubusercontent.com/41012778/80320436-582f2780-87e4-11ea-8385-36389ad1f6d0.png)

Template Sites
- [templated.co](https://templated.co/)
- [HTML5 Up](https://html5up.net/) <------- my site uses the 'Identity' template from here

#### Steps
We will simply replace the HTML code for the site we just deployed with the HTML code from a template.

- **Step 1**: Pick your template

- **Step 2**: Download the template
  - This will likely download a zip file containing all of the template files to your Downloads folder

![image](https://user-images.githubusercontent.com/41012778/80320579-384c3380-87e5-11ea-97e5-74b4bef31bf5.png)

- **Step 3**: Copy the template to your starter project

- **Step 4**: Tell Express to use the template's HTML
  - Go to your `index.js` file (should be at the top level of your project) and make it look like this:

```js
express()
  .use('/', express.static(path.join(__dirname, '<NAME OF YOUR TEMPLATE FOLDER>')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
```

- Run the application locally:
```
npm start
```

- Go to `localhost:5000` and you should see your template!! Next, we'll update the template with all of your information and deploy it to Heroku:

- **Step 5**: Personalize the Template (Coming Soon)

### Use Heroku to deploy the site to the web

```
$ heroku create
$ git push heroku master
$ heroku open
```

- It will take a couple seconds, but it should redirect you to your browser where you can see the site deployed onto the web with a designated URL that Heroku picked. These URLs can be swapped for your own domain, once you purchase it! 

< IMG >

### Making Changes

- The flow for quickly making and testing out changes to your site is the following:

  - _TODO: add npm up/down flow_

  - Update some code, say your index.html

  - Go to `localhost:5000` in your browser, refresh the page and you should see your changes

    - If you don't see anything, go to your Terminal/Power Shell -> Go to your repo -> `npm start`

  - Once you are satisfied, we need to push the changes to git so that heroku knows what to deploy. To do this:

    - Go to your Terminal/Github Shell and run:
    ```
    $ git status
         <it will output the files that have changed, IN RED>

    $ git add views public
        <it will output the files that have changed, IN GREEN>
    ```

    - Do not pay attention to any other files besides the ones in `views` and `public`

    - We just performed the `git add` command, which is known as "staging". This means "get my files ready to be uploaded to Git, but don't upload them quite yet".

    - Next:
    ```
    $ git commit -m "personal site update"
    ```

    - Here we are "committing", it's special Github language which means "checkpoint"-ing. We're just letting github know what we're going to include when we upload.

    - You can put whatever you want in the quotes after the `-m`, it's just a message to mark the commit with

    - Now we need to send everything to Git. Do:
    ```
    $ git push
    ```

  - Finally to get Heroku to deploy the latest code from Github, all you need to do is:

    ```
    $ git push heroku master
    $ heroku open
    ```

- **Step 6**: Redeploy!
  - [Test out Changes and Redeploy to Heroku](https://github.com/joor-jordanb/node-js-getting-started/wiki/Build-Your-Own-Personal-Site/#test-out-your-changes)
