class Book {
  constructor(title, author, genre, hardCover, pages) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.hardCover = hardCover;
    this.pages = pages;
  }
  pageCount() {
    console.log(this.title + " has " + this.pages + " pages.");
  }
}

export default Book;
