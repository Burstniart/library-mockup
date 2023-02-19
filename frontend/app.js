console.log("Big titty goth gf!")

//require('./styles/app.css');
// you can also do
import './styles/app.css';
import UI from './UI.js'

// as soon as the page loads get the contentx
document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    ui.renderBooks();
});


document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;

    // Basically create a form object and shove the data in
    const formData = new FormData();
    formData.append('image', image[0]);    
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

    const ui = new UI();
    ui.addNewBook(formData);
    ui.renderMessage(`I'll add this to the collection~`, 'success', 3000);
    
    e.preventDefault();
});

document.getElementById('books-cards').addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
	const ui = new UI();
	ui.deleteBook(e.target.getAttribute('_id'));
        ui.renderMessage(`Such a tragic fate...`, 'danger', 2000);
        console.log("Your time has come...");
	}
    e.preventDefault();
});


