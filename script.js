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


function addBookToLibrary() {
  const title = prompt("What's the title of the book?");
  const author = prompt("What's the author?");
  const pages = prompt("How many pages?");
  const read = prompt("Did you read it?");

  myLibrary.push({
    title: title,
    author: author,
    pages: pages,
    read: read,
  });
}

function loopBooks() {
  myLibrary.forEach((books) => console.log(books));
}

// addBookToLibrary();
// loopBooks();
