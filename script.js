let myLibrary = [
    // { title: 'Yvain, ou le chevalier au lion',
    //   author: 'Chrétien de Troyes',
    //   pages: '300 pages',
    //   read: true
    // },
    // { title: 'Madame Bovary',
    //   author: 'Gustave Flaubert',
    //   pages: '500 pages',
    //   read: true
    // },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + ', by ' + this.author + ', ' + this.pages + ', ' + this.read
    };
};

function addBookToLibrary() {
  let title = 'Yvain, ou le chevalier au lion'; // get value from form 
  let author = 'Chrétien de Troyes'; // get value from form 
  let pages = '300 pages'; // get value from form 
  let read = true; // get value from form 

  const yvain = new Book(title, author, pages, read);
  myLibrary.push(yvain);
  createBookCard();
};

const library = document.querySelector('#library');

function createBookCard(title, author, pages, read) {
    const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = generateCardText();
    
    library.appendChild(card);
};

function generateCardText() {
    myLibrary.forEach(function(index) {
      console.log(index.info());
    });
};

addBookToLibrary();