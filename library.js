const addBtn = document.querySelector('#newBook');
const addForm = document.querySelector('#addForm');
const submitBtn = document.querySelector('#submit');


let myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.button = document.createElement('button');
    this.clear = document.createElement('button');
}

Book.prototype.readStatus = function() {
    if (this.read == "read") {
        this.read = "unread";
    } else {
        this.read = "read";
    }
    clearTable();
    displayBooks();
};



// Function to add to Libaray Array
function addBooksToLibrary(obj) {
    myLibrary.push(obj);
}

function addBookToLibrary() {
    const title = document.querySelector('#title-input').value;
    const author = document.querySelector('#author-input').value;
    const pages = document.querySelector('#pages-input').value;
    let read = document.querySelector('#read-input').checked;
    if (read == true) {
        read = "read";
    } else {
        read = "unread";
    } ;
    // addForm.reset();
    //addForm.hidden = true;
    //addBtn.hidden = false;
    myLibrary.push(new Book(title, author, pages, read));
    clearTable();
    displayBooks();
}


const imHappyForYou = new Book("I'm Happy for you", "Kay Wills Wyma", 231, "unread");
const theHobbit = new Book("The Hobbit", "JRR Tolkien", 298, "unread");
const crazyRichAsians = new Book("Crazy Rich Asians", "Kevin Kwan", 576, "unread");

addBooksToLibrary(imHappyForYou);
addBooksToLibrary(theHobbit);
addBooksToLibrary(crazyRichAsians);


let clearTable = function() {
    const table = document.getElementById('table');
    table.innerHTML = '';
} 

let cleanLibrary = function() {

}

let myTable = document.querySelector('#table');
let headers = ['Title', 'Author', 'Pages', 'Read/Unread', 'Update Read Status', 'Remove From Library'];

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
            if(text == book.button) {
                let cell = document.createElement('td');
                let makeButton = document.createElement('button');
                makeButton.innerHTML = "Update";
                makeButton.addEventListener("click", () => book.readStatus());
                cell.appendChild(makeButton);
                row.appendChild(cell);
            } else if (text == book.clear) {
                let cell = document.createElement('td');
                let makeButton = document.createElement('button');
                makeButton.innerHTML = "Remove";
                makeButton.addEventListener("click", () => {
                    for(var i = 0; i < myLibrary.length; i++) {
                        if (myLibrary[i].title == book.title) {
                            //delete myLibrary[i];
                            myLibrary.splice([i], 1);
                            

                        }
                    } 
                    clearTable(); 
                    displayBooks();});
                cell.appendChild(makeButton);
                row.appendChild(cell);
            } else {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            }
        });
        table.appendChild(row);
    });

    myTable.appendChild(table);
}

displayBooks();




submitBtn.addEventListener('click', addBookToLibrary);

