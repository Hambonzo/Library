const myLibrary = [];


function Book(title, author, pages, finishedReading) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finishedReading = finishedReading;
}

Book.prototype.info = function() {
     return this.title + " by " + this.author + ", " + this.pages + " pages, " + " " + this.finishedReading;
}

function addBookToLIbrary(title, author, pages, finishedReading) {
    let book = new Book(title, author, pages, finishedReading);
    let id = crypto.randomUUID();
    book.id = id;
    myLibrary.push(book);
    
}

function displayLibrary(){

    const tableBody = document.getElementById("library-body");
    
    tableBody.innerHTML = "";

    for(let Book of myLibrary) {
        let row = document.createElement("tr")
        
        row.innerHTML = `
        <td>${Book.title}</td>
        <td>${Book.author}</td>
        <td>${Book.pages}</td>
        <td>${Book.finishedReading}</td>
        <td>${Book.id}</td>
        `

        tableBody.appendChild(row);

    }
}


addBookToLIbrary("The Fellowship of the ring", "Tolkien", 423, "Yes");

addBookToLIbrary("Words Of Radiance", "Brandon Sanderson", 1087, "Yes");

addBookToLIbrary("War and Peace", "Leo Tolstoy", 1225, "No");

displayLibrary();