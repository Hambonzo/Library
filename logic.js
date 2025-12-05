const myLibrary = [];

function Book(title, author, pages, finishedReading) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finishedReading = finishedReading;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + " " + this.finishedReading;
        
    }
}

function addBookToLIbrary() {
    
    
}