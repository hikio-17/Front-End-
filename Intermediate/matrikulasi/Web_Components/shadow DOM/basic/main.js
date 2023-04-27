// Shadow Host
const divElement = document.createElement('div');

/// element yang berada di dalam shadow DOM
const headingElement = document.createElement('h1');
headingElement.innerText = 'Ini merupakan konten yang berada di dalam shadow DOM';

// melampirkan shadow root pada shadow host
// Mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({ mode: 'open' });


// Memasukkan element heading ke dalam shadow root
shadowRoot.innerHTML += `
    <style>
        h1 {
            color: yellow;
        }
    </style>
`
shadowRoot.appendChild(headingElement);

// Memasukkan elemen shadow host ke regular DOM
document.body.appendChild(divElement);