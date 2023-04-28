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


//  AJAX menggunakan Fetch
// get
fetch('https://api-to-call.com/endpoint') // mengitrim request
    .then((response) => {
        return response.json(); // mengubah response object ke JSON
    })
    .then((responseJson) => {
        console.log(responseJson); // mengnangi response berhasil
    })
    .catch((error) => {
        console.log(error); // menangani response gagal
    })

// PUT, DELETE, POST yang memerlukan set header
// fetch(targetUrl, options)

fetch('https://books-api.dicoding.dev/add', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
    },
    body: JSON.stringify({
        id: 1,
        title: 'title',
        author: 'author',
    }),
});
