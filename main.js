window.addEventListener('DOMContentLoaded', function() {
    // Simulated book data
    const featuredBooksData = [
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' },
      { title: 'Book 3', author: 'Author 3' },
    ];
  
    const bookList = document.querySelector('.book-list');
  
    featuredBooksData.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = book.title;
  
      const authorElement = document.createElement('p');
      authorElement.textContent = `by ${book.author}`;
  
      bookElement.appendChild(titleElement);
      bookElement.appendChild(authorElement);
  
      bookList.appendChild(bookElement);
    });
  });
  
