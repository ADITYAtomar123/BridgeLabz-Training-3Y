// Q3: Library Management System (Classes + Objects)
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`${this.title} has been issued.`);
        }
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`${this.title} was not issued.`);
        } else {
            this.isIssued = false;
            console.log(`${this.title} has been returned.`);
        }
    }
}

const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Guide", "Smith", "102"),
    new Book("Web Development", "David", "103")
];

console.log("Available books:");
books.filter(book => !book.isIssued)
    .forEach(book => console.log(`${book.title} - ISBN: ${book.ISBN}`));

function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);
    if (book) book.issueBook();
    else console.log("Book not found.");
}

issueBookByISBN("102");
