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
  for (const value of myLibrary) {
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
      tempDiv.appendChild(tempP);
      tempP.classList.add("card-items");
    }
    tempDiv.classList.add("card");
    mainMenu.appendChild(tempDiv);
  }
}

// addBookToLibrary();
loopBooks();
