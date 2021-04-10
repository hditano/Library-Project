const submitButton = document.querySelector(".submitBTN");
const mainMenu = document.querySelector(".main-menu");

const nameTitle = document.querySelector(".name-title");
const nameAuthor = document.querySelector(".name-author");

const bookInput = document.querySelector(".books-input");

const textName = document.querySelector("#name");
const textAuthor = document.querySelector("#author");
const textPages = document.querySelector("#pages");
const textRead = document.querySelector("#read");

const lastChild = document.querySelector('.card');

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

// Functions

//Render Books
function loopBooks() {
  for (const value of myLibrary) {
    let elems = [
      `Title: ${value["title"]}`,
      `Author: ${value["author"]}`,
      `Pages: ${value["pages"]}`,
      value["read"],
      `Data-ID: ${value["dataID"]}`,
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
    tempDiv.classList.add("card");
    removeBtn.setAttribute("type", "button");
    removeBtn.setAttribute("class", "remove-button");
    removeBtn.textContent = "Remove";
    tempDiv.appendChild(removeBtn);
    mainMenu.appendChild(tempDiv);
  }
  lastLength = myLibrary.length;
}


// Add Books
function addBook(title, author, pages, read) {
  myLibrary.push({
    title: title,
    author: author,
    pages: pages,
    read: read,
    dataID: myLibrary.length,
  });
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
      `Data-ID: ${value["dataID"]}`,
    ];
    console.log(myLibrary.slice(-1))
    let tempDiv = document.createElement("div");
    for (let i = 0; i < elems.length; i++) {
      let tempNode = document.createTextNode(elems[i]);
      let tempP = document.createElement("p");
      tempP.appendChild(tempNode);
      tempDiv.appendChild(tempP);
    }
    let removeBtn = document.createElement('button');
    tempDiv.appendChild(removeBtn);
    mainMenu.insertBefore(tempDiv, lastChild);
  }
}

// Event-Listeners

submitButton.addEventListener("click", (e) => {
  return addBook(
    textAuthor.value,
    textName.value,
    textPages.value,
    textRead.value
  );
});



// addBookToLibrary();
loopBooks();
