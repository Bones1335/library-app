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

// Create individual cards from myLibrary array
const library = document.querySelector('#library');

function createBookCards() {
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = 'test';
  
    library.appendChild(card);    
  };
};




