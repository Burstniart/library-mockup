Book info storing web app made with Express Js, Node Js, Mongo Db and Vanilla Javascript.

Node JS us the backend technology as this is a fast web oriented implementation, should be relatively fast to construct and deploy.

Express JS will be our server side election.

Mongo DB is the database to store data for the web app.

Mongoose is a module that allows for database connections with Mongo.

Mongo DB Atlas will implement the database online.

HTML, CSS and plain Javascript for the front end as this is a project oriented towards learning the backend side of a deployment.

Webpack to deploy to production.

An API Rest will be necessary to create the communication ewith the front and backend.

Heroku will be the host for our web app.

Morgan is a NPM dependency that allows to view through the server console incoming petitions, it's an express middleware.

Multer handles images.

Environmets variables will be handled with dotenv.

Cross-env helps define te environment when needed.

Cors will help servers connect to each other because through contructions andafter deployment the app will need to talk to different servers.

Fs-extra handles file system routes and paths, the extra goes for handling promises for async await functions (this may have been resolved into the fs module in node but needs to be fact checked as of 2023).

Nodemon as a development dependency helps with the fact that the server must be resetted often, hearing changes in the node server and applying them.
- Note is executed with npx command and installed with the -D flag.

1- Creating the server

In the 'backend' directory create an 'index.js' file to with the express configuration to start a server, that is:
- Call the express module.
- Assign it a port.
- Create an output message once it's up and running.

*Remember*
Running the project with nodemon instead of regular node so the server applies changes on the run instead of having to reset the server each time.
Setting a script definition to run nodemon on the backend/index.js file is one way of doing it.

When Morgan is called in the server go ahead and set up the call as dev
morgan('dev')

- The destination var for the configuration in diskStorage is a file where the images will be stored, this directory doesn't need to exist beforehand, meaning that multer can create it for us if it doesn't already exist.
As for the path we call the "path" module so our app knows where to find stuff.

The example goes like this: destination: 'public/uploads'

Routes

To hanlde our routes we create a new file books.js in which we'll be handing Json responses to the API direction specified in the routes we assign it.

As for the routes we specify the route name and the logical route, where our file is located.

Next we use the express module to serve static files, this files do not change and will work as our Frontend.
Now when we visit the mai

Connecting the Database

Using the mongoose module we connect to out database, then we need to call that file where the call for the app is made.
This is the datbase.js file being called in the main index.js file.

Creating the data model

We need to define the data structure for out database, we do son in the models/Book.js file.
- Create the Schema for the data model and then export it. 

Use enviroment variables to assign the mongodb route.
- Create a .env file where we assign the mongodb url to a variable, then import the module via a required in the main index file and finally use the process.env function to call the variable in the database.js file.
Dotenv module is mainly a development tool, not a production tool.


Edit package.json to add the production and development node_env variables to work with using the cross_env mdoule.

Definde in the index.js file where the server must point to when it is being called for development or production, for now just tell it to run the dotenv.cinfig() method whenever the server is started as development.

Creating a rest API
Back to routes/books.js baby.

- In our router file we call the model file we made and an async/await response to get all the data stored in out databse.
- Create a POST	method so we can start adding stuff to our database.

Test sending an empty POST request to the API route and see it returns and empty object with a 200 status (Ok).
Now test sending POST request with an object

// Post request from client and cli doesnt seem to work, but inserting directly to the db and the consulting seems to be working fine...
// Nevermind, just haven't added the onsert function yet hehehe

example:
as header
Content-Type: application/json
{
 "text":"TEST"
}

We then modify the post method to take a post request that should have the structure we defined in the schema and save it to our database, we should be able to see inside the database the data we are storing, as well as requesting a get response with the method we already defined.

Now let us create the DELETE method for our API.

By now the backend is pretty much done, you can go do the frontend.

Install the following packages as development dependencies (-D):
Webpack, Webpack-cli, html-webpack-plugin css-loader style-loader mini-css-extract-pugin, webpack-dev-server & timeago.js

Webpack.config.js
To work with webpack, export a module to tell webpack the location of the project in the directories.
Entry is to specify the main frontend file, in this case "frontend/app.js"
Output is the location where webpack will alocate the resulting of bundling the code, which as we have configured so far, should be "backend/public" directory.

Test run to bundle app.js, html-webpack-plugin to  include html

Add in the plugins required for webpack to handle the HTML

From now on whenever we want to make changes to the frontend of our application what we need to do is to change the frontend files and bundle them together with webpack.

Configure the CSS module to do the same with the frontend style.
For this project the CSS is being read inside the javascript, not the HTML as convention cases dictate, just making that clear.
- To make use of the CSS in our app.js file simply import it with the required function et voila!

Define a new command
This time we're defining the 'Build' command to build the frontend files and environment configuration like the webpack build and bundles so far.

- Now let us congifure the behavior of webpack whenever NODE_ENV is development or production, this inside the module confifuration in webpack.config.
- Next configure the style plugin behavior to set the output file and stuff.
- Set devTools to track errors and redirect js and css output to directories with the respective names for more order and clean reading.

-- HTML should be on the main directory by default so the server can read it unless you specify it's route somewhere else, so for now it can stay in the 'public' directory.
-- Also ".map" files are a result of using "devtools: 'source-map'" and can be ignored by the user for now. (AKA don't know what's up with them but also kinf of don't need to rn).

Since we'll be working on the Frontend now we can go ahead and add an ignore flag to our nodemon call in the package.json file to prevent the server from resetting itself everytime we make a change in the frontend directory.

-- This project uses Bootstrap and Animace CSS

-Remember to do the require thing with app.js in order for the CSS to wrok properly, maybe after reconfiguring the server resert you forgot, happens to the best of us.

Now to create a server to be used in the frontend to view changes without having to 'rebuild' the app everytime we'll be using the webpack-dev-server module, let us set a new sever command in package.json.
Webpack.config.js required "devServer:" configuration in order to hot update any changes in the html, the css and js changes were being applied as they were saved. 
-- Also apparently webpack serve does the same as the webpack-deev-server module

Do the HTML, the bootstrap (AKA CSS), the Javascript.
For the JS we are capturing the form events and using them, working on app.js we get each element from the form an prevent it from defaulting it's behavior

Services
Next we'll be working with 'services/BookService.js' to handle the methods we'll be using

-- Remember your app doesn't start unless your mongo container is running hehe
Now that we created a new class "BookService" let's go ahead and import taht to app.js son our frontend JS can make use of it.

CORS PROBLEM
To solve this, go to backend/index.js, our server file, and let's use that cors module we installed

Reconfigure

// As of this point the app is working properly, will do a commit in case image saving to local folder does not work properly, already had a bad night sleep trying to figure this thing up and finally got it to work again.

// Turns out I was just missing parenthesis in the date object "Date()"...
// Also not sure what I fixed but image route has been saved succesfully inside the DB so... yay.

UI.js

Time to create the interface.
Since we have the functionality in the BookService.js file we'll implement it in UI.js

Capturing the DOM event for whenever the delete button created through the getBook service and renderbook function from UI is clicked to deelete that record.
For whatever reasone we create a new UI class everytime we need to do something.

To also delete files while deleteing records from the db go to the routes file and use the imagePath variable to delete the file. Here we use the module FS-extra which is a better version of file system "fs", we use the unlink method to delete the file and path module to resolve the direction, which we saved as previously shown in the record model.

To prevent webpack from acting up whenever we do something the webpack config file has a mode variable, now we switch that variable to production cause we set webpack to only bundle files whenever mode is production and not development, which was the value we;ve been working with this whole time.

Remove the localhost addres fromt the files as we prepare to upload to our hosting service
Add post install command to package.json

When isntalling app give db access to host service.

Final congiguration for render set up
Build command : npm install && npm run build
Start command: npm run start
