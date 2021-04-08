const submitButton = document.querySelector(".submitBTN");
const mainMenu = document.querySelector(".main-menu");

const nameTitle = document.querySelector(".name-title");
const nameAuthor = document.querySelector(".name-author");

const bookInput = document.querySelector(".books-input");

const textName = document.querySelector("#name");
const textAuthor = document.querySelector("#author");
const textPages = document.querySelector("#pages");
const textRead = document.querySelector("#read");

let myLibrary = [
  {
    title: "Quinto Elemento",
    author: "Wilbur Smith",
    pages: 230,
    read: true,
  },
  {
    title: "El Señor de los Anillos",
    author: "J.Tolkien",
    pages: 430,
    read: false,
  },
];

submitButton.addEventListener("click", function (e) {
  myLibrary.push({
    title: textName.value,
    author: textAuthor.value,
    pages: textPages.value,
    read: textRead.value,
  });
});

function loopBooks() {
  for(const value of myLibrary) {
    const newDiv = document.createElement("div");
    const newP = document.createElement("p");
    const createTitle = document.createTextNode(value['title']);
    const createAuthor = document.createTextNode(value['author']);
    const createPages = document.createTextNode(value['pages']);
    const createRead = document.createTextNode(value['read']);
    newP.appendChild(createTitle);
    newP.appendChild(createAuthor);
    newP.appendChild(createPages);
    newP.appendChild(createRead);

    newDiv.appendChild(newP);
    mainMenu.appendChild(newDiv);
    }
}

// addBookToLibrary();
// loopBooks();
