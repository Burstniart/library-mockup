if (process.env.NODE_ENV == 'development') {
    require('dotenv').config(); // mainly a dev tool, not a production tool
}

const express = require('express'); // Create a server 
const morgan = require('morgan'); // See in console client petitions
const multer = require('multer'); // Process images
const path = require('path'); // For working with files and dir paths
const cors = require('cors'); // Frontend page will comunicate with backend api in another port so

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// Initializaton
const app = express();
require('./database')

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors()); // communicate with other ports/servers
app.use(morgan('dev'));

const storage = multer.diskStorage({ // configuration
    destination: path.join(__dirname,  'public/uploads'), // where to store images/ directory can be created i.e. doesn't need to an empty dir
    filename(req, file, cb) { // req is petition info, file is the file info and cb a function to be executed
	cb(null, new Date().getTime() + path.extname(file.originalname)); // the file name will be the time plus the file extensino name, taken from the uploaded file
    }
})

app.use(multer({storage}).single("image")); // handles just one parameter aka 1 image at a time
app.use(express.urlencoded({extended: false})); // enables the use a form from frontedn as a json
app.use(express.json()); // hmmm json


// Routes
// '/api/books' routes is the route for the API
app.use('/api/books',require('./routes/books')); // import the file with the router 

// Static files
// Here we serve the frontend files to be displayed, since this files don't change
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
