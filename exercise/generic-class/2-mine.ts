// You are tasked with creating a program for storing and retrieving
// information about books for use in a library system.
//
// Requirements:
// - Create a generic class which can contain any type
// - The class must have the following functionality:
//   - Set initial books from an array of existing books
//   - Add new books
//   - Remove existing books
//   - Viewing all books
//   - Viewing a subset of books based on a filter function
//
// To confirm that your program has the correct behavior, perform the following:
// - Create a new generic collection of books from the existing `libraryBooks`
//   array
// - Add `book3` to your collection
// - Assert that the total number of books in the collection is 3
// - Remove `book1` from the collection
// - Assert that the total number of books in the collection is 2
// - Retrieve all books written in the year 2023 or later
// - Assert that the total number of books retrieved is 1

import { strict as assert } from "assert";

interface Book {
  title: string;
  author: string;
  year: number;
}

const book1 = { title: "Book 1", author: "Author 1", year: 2021 };
const book2 = { title: "Book 2", author: "Author 2", year: 2022 };
const book3 = { title: "Book 3", author: "Author 3", year: 2023 };
const book4 = { title: "Book 4", author: "Author 3", year: 2023 };

const libraryBooks = [book1, book2];

class Library<T extends Book> {
  books: Book[];

  constructor(lib: Book[]) {
    this.books = lib;
  }

  addBook(book: T): void {
    this.books.push(book);
  }

  // fucking got confused with slice and splice, of course splice is better as shown is 2.ts

  removeBook(param: Book): void {
    let isFound = false;
    for (const book of this.books) {
      if (book === param) {
        isFound = true;

        const index: number = this.books.indexOf(book);
        console.log("index =>", index);

        if (index === 0) {
          this.books = this.books.slice(1);
        } else {
          const firstPart = this.books.slice(0, index);
          const secondPart = this.books.slice(index + 1);
          this.books = firstPart.concat(secondPart);
        }
      }
    }
    if (!isFound) {
      console.error("no book matched");
    }
  }

  log(): void {
    console.log("Books =>", this.books);
  }

  filter(param: string | number): Book[] {
    const selection: Book[] = [];

    for (const book of this.books) {
      let k: keyof typeof book;

      for (k in book) {
        console.log(`${k}: ${book[k]}`);
        if (book[k] === param) {
          selection.push(book);
        }
      }
    }
    return selection;
  }
}

const bibliotheque = new Library(libraryBooks);

bibliotheque.log();

bibliotheque.addBook(book3);

bibliotheque.log();

assert.equal(bibliotheque.books.length, 3);

bibliotheque.removeBook(book4);

bibliotheque.log();

bibliotheque.removeBook(book2);

bibliotheque.log();

assert.equal(bibliotheque.books.length, 2);

const filter = bibliotheque.filter(2023);
bibliotheque.log();
assert.equal(filter.length, 1);
