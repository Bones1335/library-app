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
        return this.title + ', by ' + this.author + ', ' + this.pages + ', ' + this.read
    };
};

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value; 
  if (document.getElementById('read').checked === true) {
      read = document.getElementById('read').value;
  } else {
      read = false;
  }

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
};

const library = document.querySelector('#library');

function createBookCard(title, author, pages, read, dataSet) {
    const card = document.createElement('div');
        card.classList.add('card');
    
    library.appendChild(card);

    const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'X';
        deleteBtn.dataset.index = dataSet;
        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(dataSet, 1);
            console.table(myLibrary);
        });

    card.appendChild(deleteBtn);

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

function pullLibraryValues() {
    myLibrary.forEach(function(index) {
      title = index.title;
      author = index.author;
      pages = index.pages;
      read = index.read;
      dataSet = myLibrary.indexOf(index);
      createBookCard(title, author, pages, read, dataSet);
    });
};

const newBookButton = document.querySelector('#newBookButton');
    newBookButton.addEventListener('click', () => {
        openNewBookWindow();   
    });

const newBookSubmit = document.querySelector('#submit');
    newBookSubmit.addEventListener('click', () => {
        addBookToLibrary();
        addNewBookCard();
        closeNewBookWindow();
    });

function openNewBookWindow() {
    document.getElementById('newBookWindow').style.display = 'block';
};

function closeNewBookWindow() {
    document.getElementById('newBookWindow').style.display = 'none';
};

function addNewBookCard() {
    const newBook = myLibrary[myLibrary.length - 1];
        title = newBook.title;
        author = newBook.author;
        pages = newBook.pages;
        read = newBook.read;

    createBookCard(title, author, pages, read);
};