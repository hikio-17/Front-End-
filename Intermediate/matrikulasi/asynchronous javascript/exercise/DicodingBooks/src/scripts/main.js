function main() {
  const baseUrl = 'https://books-api.dicoding.dev';

  const getBook =  async () => {
    // tuliskan kode di sini!

    // menggunakan ajax xhr
    // const xhr = new XMLHttpRequest();

    // xhr.onload = function() {
    //  const responseJson = JSON.parse(this.responseText);

    //  if (responseJson.error) {
    //   showResponseMessage(responseJson.message)
    //  } else {
    //   renderAllBooks(responseJson.books);
    //  }
    // }

    // xhr.onerror = function() {
    //   showResponseMessage();
    // }

    // xhr.open('GET', `${baseUrl}/list`);

    // xhr.send();

    // ajax dengan fetch with then
    // fetch(`${baseUrl}/list`)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.error) {
    //       showResponseMessage(responseJson.message);
    //     } else {
    //       renderAllBooks(responseJson.books);
    //     }
    //   })
    //   .catch((error) => showResponseMessage(error));

    // ajax dengan async/await
    try {
      const response = await fetch(`${baseUrl}/list`);
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllBooks(responseJson.books);
      }
    } catch (error) {
      showResponseMessage(error)
    }

  };


  const insertBook = async (book) => {
    // tuliskan kode di sini!
    // ajax with xhr
    // const xhr = new XMLHttpRequest();
    // xhr.onload = function() {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook()
    // }
    // xhr.onerror = function() {
    //   showResponseMessage();
    // }
    // xhr.open('POST', `${baseUrl}/add`);
    // // set header
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('X-Auth-Token', '12345');
    // xhr.send(JSON.stringify(book));

    // ajax with fetch handle promise with callback
    // fetch(`${baseUrl}/add`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'X-Auth-Token': '12345',
    //   },
    //   body: JSON.stringify(book),
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   showResponseMessage(responseJson.message);
    //   getBook()
    // })
    // .catch((error) => showResponseMessage(error));

    // ajax fetch with async/await
    try {
      const response = await fetch(`${baseUrl}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(book),
      });
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        showResponseMessage(responseJson.message);
        getBook();
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const updateBook = async (book) => {
    // tuliskan kode di sini!
    // ajax with xhr

    // const xhr = new XMLHttpRequest();
    // xhr.onload = function() {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // }
    // xhr.onerror = function() {
    //   showResponseMessage();
    // }
    // xhr.open('PUT', `${baseUrl}/edit/${book.id}`)
    // // SET HEADER
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('X-Auth-Token', '12345');
    // xhr.send(JSON.stringify(book));

    // ajax with promise then /catch
    // fetch(`${baseUrl}/edit/${book.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'X-Auth-Token': '12345',
    //   },
    //   body: JSON.stringify(book),
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // })
    // .catch((error) => showResponseMessage(error));

    // ajax fetch with style async/await
    try {
      const response = await fetch(`${baseUrl}/edit/${book.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(book),
      });
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        showResponseMessage(responseJson.message);
        getBook();
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const removeBook =  async (bookId) => {
    // tuliskan kode di sini!
    // ajax with xhr

    // const xhr = new XMLHttpRequest();
    // xhr.onload = function() {
    //   const responseJson = JSON.parse(this.responseText);
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // }
    // xhr.onerror = function() {
    //   showResponseMessage();
    // }
    // xhr.open('DELETE', `https://books-api.dicoding.dev/delete/${bookId}`);
    // xhr.setRequestHeader('X-Auth-Token', '12345');
    // xhr.send();

    // ajax with fets using style then/catch
    // fetch(`${baseUrl}/delete/${bookId}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'X-Auth-Token': '12345',
    //   }
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   showResponseMessage(responseJson.message);
    //   getBook();
    // })
    // .catch((error) => showResponseMessage(error));

    // ajax with fetch using style async/await
    try {
      const response = await fetch(`${baseUrl}/delete/${bookId}`, {
        method: 'DELETE',
        headers: {
          'X-Auth-Token': '12345',
        }
      });
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        showResponseMessage(responseJson.message);
        getBook();
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };


  
  
  
  
  /*
      jangan ubah kode di bawah ini ya!
  */

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector('#listBook');
    listBookElement.innerHTML = '';

    books.forEach(book => {
      listBookElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card">
            <div class="card-body">
              <h5>(${book.id}) ${book.title}</h5>
              <p>${book.author}</p>
              <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
            </div>
          </div>
        </div>
      `;
    });

    const buttons = document.querySelectorAll('.button-delete');
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        const bookId = event.target.id;
        
        removeBook(bookId);
      });
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {

    const inputBookId = document.querySelector('#inputBookId');
    const inputBookTitle = document.querySelector('#inputBookTitle');
    const inputBookAuthor = document.querySelector('#inputBookAuthor');
    const buttonSave = document.querySelector('#buttonSave');
    const buttonUpdate = document.querySelector('#buttonUpdate');

    buttonSave.addEventListener('click', function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value
      };
      
      insertBook(book);
    });

    buttonUpdate.addEventListener('click', function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value
      };

      updateBook(book);
    });
    getBook();
  });
}

export default main;