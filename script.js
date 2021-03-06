let myLibrary = [
    { title: 'Yvain, ou le chevalier au lion',
      author: 'Chrétien de Troyes',
      pages: '300 pages',
      read: true,
      id: crypto.randomUUID()
    },
    { title: 'Madame Bovary',
      author: 'Gustave Flaubert',
      pages: '500 pages',
      read: true,
      id: crypto.randomUUID()
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function() {
        return this.title + ', by ' + this.author + ', ' + this.pages + ', ' + this.read
    };
};

Book.prototype.readStatus = function() {
    const readToggle = document.createElement('button');
    readToggle.classList.add('readToggle');
    readToggle.textContent = read;
    card.appendChild(readToggle);
    
    readToggle.addEventListener('click', () => {
        let bookId = readToggle.parentNode.dataset.index;
        myLibrary.find(book => book.id === bookId).readStatus();

    });
console.log('help')
}

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
        card.dataset.index = dataSet;
    
    library.appendChild(card);

    const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => {
            let bookId = deleteBtn.parentNode.dataset.index; // select parentNode's index id 
            const parentDiv = deleteBtn.parentNode;
                parentDiv.remove(); // delete whole card
            myLibrary = myLibrary.filter((book) => book.id !== bookId); // filter through original array to create new array without deleted book based on the unique id given by crypto.randomUUID()
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

    const readToggle = document.createElement('button');
        readToggle.classList.add('readToggle');
        readToggle.textContent = read;
        readToggle.addEventListener('click', () => {
            let bookId = readToggle.parentNode.dataset.index;
            let foundBook = myLibrary.find(book => book.id === bookId);
            if (foundBook.id === bookId) {
                if (foundBook.read === true) {
                    foundBook.read = false
                    read = false
                } else if (foundBook.read === false) {
                    foundBook.read = true
                    read = true
                }
                readToggle.textContent = read;
            }
        });
    
    card.appendChild(readToggle);

    titleText.textContent = 'Title: ' + title;
    authorText.textContent = 'Author: ' + author;
    pagesText.textContent = 'Pages: ' + pages;
    readText.textContent = 'Read: ';
};

function pullLibraryValues() {
    myLibrary.forEach(function(index) {
      title = index.title;
      author = index.author;
      pages = index.pages;
      read = index.read;
      dataSet = index.id;
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
        dataSet = newBook.id;
    createBookCard(title, author, pages, read, dataSet);
};