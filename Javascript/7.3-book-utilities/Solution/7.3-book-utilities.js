let book1 = {
    name: 'Death Note',
    author: "Nisio Isin",
    year: "2006"
}
let book2 = {
    name: 'Lord of the Rings',
    author: "J.R.R. Tolkien",
    year: "1954"
}
let bookUtils = {}

bookUtils.getFirstPublished = function(var1, var2) {
    return Math.min(var1.year,var2.year);
}

bookUtils.setNewEdition = function(book, editionYear) {
    book.latestEdition = editionYear;
}
bookUtils.setLanguage = function(book, language) {
    book.language = language;
}
bookUtils.setTranslation = function(book,language,translator) {
    let Translation = {
        translator: translator,
        language: language
    }
    book.translation = Translation;
}
bookUtils.setPublisher = function(book,name,location) {
    let Publisher = {
        name: name,
        location: location
    }
    book.publisher = Publisher;
}
bookUtils.isSamePublisher = function(book1,book2) {
    return (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location)
}

console.log(book1);
console.log(book2);

console.log(bookUtils.getFirstPublished(book1,book2)); 

bookUtils.setNewEdition(book1,2021);
console.log('before change',book1);
bookUtils.setNewEdition(book1,2023);
console.log('after change',book1);

bookUtils.setLanguage(book2,'Doge');
console.log('before change',book2);
bookUtils.setLanguage(book2,'Yeddish');
console.log('after change',book2);

bookUtils.setTranslation(book2,'Italian','Maldini')
console.log(book2);

bookUtils.setPublisher(book1,'Test Publication','Israel')
console.log(book1);
bookUtils.setPublisher(book2,'Test Publication2','Spain')
console.log(book2);

console.log('Same publisher (book1 with book1)? ',bookUtils.isSamePublisher(book1,book1));
console.log('Same publisher (book1 with book2)? ',bookUtils.isSamePublisher(book1,book2));