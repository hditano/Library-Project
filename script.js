/* Variables */

const submitButton = document.querySelector(".submitBTN");
const mainMenu = document.querySelector(".main-menu");

const nameTitle = document.querySelector(".name-title");
const nameAuthor = document.querySelector(".name-author");
const removeBtn = document.querySelector('.remove-button');

const bookInput = document.querySelector(".books-input");

const textName = document.querySelector("#name");
const textAuthor = document.querySelector("#author");
const textPages = document.querySelector("#pages");
const textRead = document.querySelector("#read");

const lastChild = document.querySelector(".card");

/* Array */

let myLibrary = [
  {
    title: "Quinto Elemento",
    author: "Wilbur Smith",
    pages: 230,
    read: true,
    dataID: 0,
  },
  {
    title: "El Señor de los Anillos",
    author: "J.Tolkien",
    pages: 430,
    read: false,
    dataID: 1,
  },
];

/* Functions */

/* Constructor */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.addBook = function () {
    myLibrary.push({
      title: this.title,
      author: this.author,
      pages: this.pages,
      read: this.read,
    });
  }
}


//Render Books
function loopBooks() {
  for (const value of myLibrary) {
    let elems = [
      `Title: ${value["title"]}`,
      `Author: ${value["author"]}`,
      `Pages: ${value["pages"]}`,
      value["read"],
    ];

    let tempDiv = document.createElement("div");
    let removeBtn = document.createElement("button");
    for (let i = 0; i < elems.length; i++) {
      let tempNode = document.createTextNode(elems[i]);
      let tempP = document.createElement("p");
      tempP.appendChild(tempNode);
      tempDiv.appendChild(tempP);
      tempP.classList.add("card-items");
    }

    // Event Delegation
    document.querySelector('.main-menu').addEventListener('click', event => {
      if(event.target.className === 'remove-button') {
        if(tempDiv.getAttribute('data-id') == myLibrary.indexOf(value)) {
          console.log(`IndexOf: ${myLibrary.indexOf(value)}`);
          console.log(`data-id: ${tempDiv.getAttribute('data-id')}`);
          myLibrary.splice(myLibrary.indexOf(value),1);
          document.querySelectorAll('.card').forEach((e) => e.remove());
          loopBooks();
        }   
      }
    });
    tempDiv.classList.add("card");
    removeBtn.setAttribute("type", "button");
    removeBtn.setAttribute("class", "remove-button");
    removeBtn.textContent = "Remove";
    tempDiv.setAttribute("data-id", myLibrary.indexOf(value));
    tempDiv.appendChild(removeBtn);
    mainMenu.appendChild(tempDiv);
  }
}


// Add Books Function

function addBook(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  newBook.addBook();
  displayLastElement();
}


// Display Last Element to the Array and Renders it
function displayLastElement() {
  for (const value of myLibrary.slice(-1)) {
    let elems = [
      `Title: ${value["title"]}`,
      `Author: ${value["author"]}`,
      `Pages: ${value["pages"]}`,
      value["read"],
    ];
    let tempDiv = document.createElement("div");
    for (let i = 0; i < elems.length; i++) {
      let tempNode = document.createTextNode(elems[i]);
      let tempP = document.createElement("p");
      tempP.appendChild(tempNode);
      tempP.classList.add("card-items");
      tempDiv.appendChild(tempP);
    }
    let removeBtn = document.createElement("button");
    tempDiv.appendChild(removeBtn);
    tempDiv.classList.add("card");
    tempDiv.setAttribute("data-id", myLibrary.indexOf(value));
    removeBtn.setAttribute("type", "button");
    removeBtn.setAttribute("class", "remove-button");
    removeBtn.textContent = "Remove";
    mainMenu.insertBefore(tempDiv, lastChild);
  }
}


// function removeBooks() {
//   document.querySelectorAll('.card').forEach((e) => e.remove());
//   loopBooks();
// }


submitButton.addEventListener("click", (e) => {
  addBook(
    textAuthor.value,
    textName.value,
    textPages.value,
    textRead.value
  );
});

// addBookToLibrary();
loopBooks();
