const myLibrary = [];


function Book(title, author, pages, finishedReading) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finishedReading = finishedReading;
}

Book.prototype.info = function () {
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + " " + this.finishedReading;
}

Book.prototype.read = function () {
    return this.finishedReading ? "Yes" : "No";
}

Book.prototype.change = function () {
    this.finishedReading = !this.finishedReading;
}

function addBookToLIbrary(title, author, pages, finishedReading) {
    let book = new Book(title, author, pages, finishedReading);
    let id = crypto.randomUUID();
    book.id = id;
    myLibrary.push(book);

}

function displayLibrary() {

    const tableBody = document.getElementById("library-body");
    tableBody.innerHTML = "";

    for (let Book of myLibrary) {
        let row = document.createElement("tr")

        row.innerHTML = `
        <td>${Book.title}</td>
        <td>${Book.author}</td>
        <td>${Book.pages}</td>
        <td class="status"><text>${Book.read()}</text><button class="change">Change</button></td>
        <td><button class="del" data-id="${Book.id}">Delete</button></td>
        `

        tableBody.appendChild(row);

        row.querySelector(".change").addEventListener("click", event => {
            Book.change();
            displayLibrary();
        })

        row.querySelector(".del").addEventListener("click", (event) => {
            let id = event.target.dataset.id;

            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].id === id) {
                    myLibrary.splice(i, 1);
                    break;
                }
            }

            // Remove the row from the table
            event.target.parentElement.parentElement.remove();
        });

    }
};

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("#close");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("form");


showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});



form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = form.elements["title"].value;
    let author = form.elements["author"].value;
    let pages = form.elements["pages"].value;
    
    let readValue = form.elements["read"].value;
    let finishedReading = readValue === "true";

    addBookToLIbrary(title, author, pages, readValue);
    displayLibrary();
});


addBookToLIbrary("The Fellowship of the ring", "Tolkien", 423, true);

addBookToLIbrary("Words Of Radiance", "Brandon Sanderson", 1087, true);

addBookToLIbrary("War and Peace", "Leo Tolstoy", 1225, false);

displayLibrary();