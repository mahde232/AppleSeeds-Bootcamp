const Book = {
    Title: "Death Note",
    Writer: "Nisio Isin",
    ReleaseDate: "2006",
    Revision: 1,
    isHardCover: false
}

function bookDescription(book) {
    return (`The book ${book.Title} was written by ${book.Writer} in the year ${book.ReleaseDate}`);
}

console.log(Book);
console.log(bookDescription(Book));