let myLibrary = [];

// Constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = "unread"; 
}

// Function to add to Libaray Array
function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

const imHappyForYou = new Book("I'm Happy for you", "Kay Wills Wyma", 231);
const theHobbit = new Book("The Hobbit", "JRR Tolkien", 298);
const crazyRichAsians = new Book("Crazy Rich Asians", "Kevin Kwan", 576);

addBookToLibrary(imHappyForYou);
addBookToLibrary(theHobbit);
addBookToLibrary(crazyRichAsians);

// var table = document.getElementById("table");  // set to table

let myTable = document.querySelector('#table');
let headers = ['Title', 'Author', 'Pages', 'Read/Unread'];

function displayBooks() {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    
    table.appendChild(headerRow);

    myLibrary.forEach(book => {
        let row = document.createElement('tr');

        Object.values(book).forEach(text =>{
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    myTable.appendChild(table);
}

displayBooks();