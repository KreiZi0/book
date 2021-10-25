ui  = new UI();
ls = new LS();

const form = document.querySelector('form');

const booktitleInput = document.querySelector('#title');
const bookauthorInput = document.querySelector('#author');
const bookisbnInput = document.querySelector('#isbn')
const bookList = document.querySelector('tbody.table-list');

document.addEventListener('DOMContentLoaded', getBooks);

form.addEventListener("submit", addBook);

bookList.addEventListener('click', deleteBook);

function addBook(e){
	const booktitle = booktitleInput.value;
	const bookauthor = bookauthorInput.value;
	const bookisbn = bookisbnInput.value;
	let newbook = new book(booktitle, bookauthor, bookisbn)
	ui.addBook(newbook)
	ls.addBook(newbook)
	e.preventDefault();
}

function deleteBook(e){
	if(e.target.tagName === 'A'){
		let book = e.target.parentElement.firstChild;
	ui.deleteBook(book);
	book = book.parentElement.previousElementSibling.textContent;
	ls.deleteBook(book);	
	}
	
}



function getBooks(){
	books = ls.getData();
	books.forEach(ui.getBooks.bind(books));
}