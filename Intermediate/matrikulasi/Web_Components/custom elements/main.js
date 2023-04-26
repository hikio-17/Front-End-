let imageFigureElement = document.querySelector('image-figure');

if (!imageFigureElement) {
    imageFigureElement = document.createElement('image-figure');
    imageFigureElement.setAttribute('src', 'https://i.imgur.com/iJq78XH.jpg');
    imageFigureElement.setAttribute('alt', 'gambar_g');
    imageFigureElement.setAttribute('caption', 'gambar g dari dicoding');
    document.body.appendChild(imageFigureElement);
}

// mengubah/menambahkan nilai attribute caption
setTimeout(() => {
    imageFigureElement.setAttribute('caption', 'Gambar 1');
}, 1000);

// menghapus imageFigureElement dari DOM
// setTimeout(() => {
//     imageFigureElement.remove();
// }, 1000);