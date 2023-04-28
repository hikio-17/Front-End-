// method get 
const xhr = new XMLHttpRequest();

xhr.onload = function() {
    console.log(JSON.parse(this.responseText));
}

xhr.onerror = function() {
    console.log('ups error')
}

xhr.open('GET', 'https://books-api.dicoding.dev/list');
xhr.send();

// method post
const xhr = new XMLHttpRequest();

xhr.onload = function() {
    console.log(JSON.parse(this.responseText));
}

xhr.onerror = function() {
    console.log('ups error')
}

xhr.open('POST', 'https://books-api.dicoding.dev/list');

// menetapkan Header property dan body request setelah open request dan dapat menetapkan sebanyak mungkin
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', '12345');

// Mengirim body request
const book = {
    id: 1,
    title: 'Edensor',
    author: 'Andrea Hirata'
}

xhr.send(JSON.stringify(book));

