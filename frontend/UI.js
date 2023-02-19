import BookService from './services/BookService.js';
import {format} from 'timeago.js';
const bookService = new BookService();

class UI {
    
    async renderBooks() {
	const books = await bookService.getBook();
	const bookCardsContainer = document.getElementById('books-cards');
	bookCardsContainer.innerHTML = '';
	books.forEach(book => {
	    const div = document.createElement('div');
	    div.className = '';
	    div.innerHTML = `
                <div class="card m-2">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="http://localhost:3000${book.imagePath}" class="img-fluid" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-block px-2">
                                <h4>${book.title}</h4>
                                <p class="card-text">${book.author}</p>
                                <a href="#" class="btb btn-danger delete" _id="${book._id}">X</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        ${format(book.creationDate)}
                    </div>
                </div>
            `;
	    bookCardsContainer.appendChild(div);
	});
    }

    async addNewBook(book) {
	await bookService.postBook(book);
	this.clearBookForm();
	this.renderBooks();
    }

    clearBookForm() {
	document.getElementById('book-form').reset();
    }

    renderMessage(message, colorMessage, timeToRemove) {
	const div = document.createElement('div');
	div.className = `alert alert-${colorMessage} message`;
	div.appendChild(document.createTextNode(message));
	

	const container = document.querySelector('.col-md-4');
	const bookForm = document.querySelector('#book-form');

	container.insertBefore(div, bookForm);
	setTimeout(() => {
	    document.querySelector('.message').remove();
	}, timeToRemove)
    }

    async deleteBook(bookId) {
	await bookService.deleteBook(bookId);
	this.renderBooks();
    }
}

export default UI;
