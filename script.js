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
    
    library.appendChild(card);

    const titleText = document.createElement('div');
        titleText.classList.add('title');
    
    card.appendChild(titleText);

    const authorText = document.createElement('div');
        authorText.classList.add('author');

    card.appendChild(authorText);

    const pagesText = document.createElement('div');
        pagesText.classList.add('pages');
    
    card.appendChild(pagesText);

    const readText = document.createElement('div');
        readText.classList.add('read');

    card.appendChild(readText);

    titleText.textContent = 'Title: ' + title;
    authorText.textContent = 'Author: ' + author;
    pagesText.textContent = 'Pages: ' + pages;
    readText.textContent = 'Read: ' + read;
};

function generateCardText() {
    myLibrary.forEach(function(index) {
      console.log(index.info());
    });
};

addBookToLibrary();