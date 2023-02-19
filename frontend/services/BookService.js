class BookService {

    constructor() {
	// API route, you can use the literal route
	this.URI =  '/api/books';
    }

    // CRUD Methods for our api

    async getBook() {
	// By default does a Get petition
	const res = await fetch(this.URI);
	const books = await res.json();
	return books;
    }

    async postBook(book) {
	const res = await fetch(this.URI, {
	    method: "POST",
	    body: book
	});
	const data = await res.json();
	console.log(data); // return the api response message AKA "Aye Aye Captain" or something like that
    }

    async deleteBook(bookId) {
	const res = await fetch(`${this.URI}/${bookId}`, {
	    headers: {
		'Content-Type':'application.json'
	     },
	    method: 'DELETE'
	 });
	const data = await res.json();
	console.log(data);
    }
}
export default BookService;
