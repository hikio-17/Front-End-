class ImageFigure extends HTMLElement {
    constructor() {
        super();
        console.log('coonstructured!');
    }

    connectedCallback() {
        this.src = this.getAttribute('src') || null;
        this.alt = this.getAttribute('alt') || null;
        this.caption = this.getAttribute('caption') || null;
        console.log(this);
        this.render();
    }

    render() {
        this.innerHTML = `
        <figure>
            <img src="${this.src}" alt="${this.alt}" />
            <figcaption>${this.caption}</figcaption>
        </figure>
    `
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }

    adoptedCallback() {
        console.log('adopeted!');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    static get observedAttributes() {
        return ['caption']
    }
};

// merupakan global variabel (object) yang digunakan untuk mendefinisikan custom element danmemberitahu bahwa terdapat HTML tag baru. di dalm custom element terdapat method define() yang digunakan untuk meletakkan tag name baru kemudian diikuti dengan javascript class yang menerapkan sifat HTMLElement
customElements.define('image-figure', ImageFigure);