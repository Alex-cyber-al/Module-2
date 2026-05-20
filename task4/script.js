class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  info() {
    return `${this.title} — ${this.author} (${this.year})`;
  }
}

class EBook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }

  info() {
    return `${super.info()}, ${this.fileSize} MB`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }

  getNewest() {
    if (this.books.length === 0) {
      return null;
    }

    return this.books.reduce((newest, book) => {
      return book.year > newest.year ? book : newest;
    });
  }
}

// Перевірка роботи програми
const lib = new Library();

lib.addBook(new Book("Кобзар", "Шевченко", 1840));
lib.addBook(new EBook("JS Guide", "MDN", 2024, 15));
lib.addBook(new Book("Тіні забутих предків", "Коцюбинський", 1911));

const booksByAuthor = lib.findByAuthor("Шевченко");
const newestBook = lib.getNewest();

let output = "";

output += "Книги автора Шевченко:\n";
booksByAuthor.forEach(book => {
  output += book.info() + "\n";
});

output += "\nНайновіша книга:\n";

if (newestBook !== null) {
  output += newestBook.info();
} else {
  output += "Бібліотека порожня";
}

document.getElementById("result").innerText = output;

console.log(booksByAuthor);
console.log(newestBook.info());