let myLibrary = [
    { title: 'Yvain, ou le chevalier au lion',
      author: 'Chrétien de Troyes',
      pages: '300 pages',
      read: true
    },
    { title: 'Madame Bovary',
      author: 'Gustave Flaubert',
      pages: '500 pages',
      read: true
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + ', ' + this.author + ', ' + this.pages + ', ' + this.read
    };
};

function addBookToLibrary() {

};





