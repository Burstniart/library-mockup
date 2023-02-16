console.log("Big titty goth gf!")

//require('./styles/app.css');
// you can also do
import './styles/app.css';
import BookService from './services/BookService.js';

document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;

    // Basically create a form object and shove the data in
    const formData = new FormData();

    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);
//    formData.append('image', image[0]);
    
    const bookService = new BookService();
    bookService.postBook(formData);

    e.preventDefault();
});




