// Defines the project routes

const { Router } = require('express');
const router = Router();
const { unlink } = require('fs-extra');
const path = require('path');

// Add acces to our data model
const Book = require('../models/Book');

// Create a route for home directory i.e. the main site of the appilcation
// res.json sends a json file instead of plain text, which is what we need for our API response
router.get('/', async (req, res) => {
    //res.json({text: 'Hello, Monika!'})
    const books = await Book.find(); // Finds all data thingy, this is an asynchronous event
    res.json(books);
});

// POST Method to receive data
router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body; // take input, which should have the model structure we defined
    const imagePath = '/uploads/' + req.file.filename;
    const newBook = new Book({title, author, isbn, imagePath}); // Create a new object from the schema we defined
    console.log(newBook);
    await newBook.save();
    // res.send('Aye aye capitain! Received!');
    res.json({message:'Aye aye captain! Message Secured!'});
});

// DELETE method
// ':id' tells the api that the direction being passed contains an id, which we can use
router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id); // pass the element id to delete
    unlink(path.resolve('./backend/public' + book.imagePath));
    console.log(book);
    res.json({message:"Now it's sleeping with the fish boss."});
})

// Route for our API
module.exports = router;


