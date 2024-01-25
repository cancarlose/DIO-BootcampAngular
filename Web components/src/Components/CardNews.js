class Cardnews extends HTMLElement{
  constructor() {
    super();

    // criação da shadow DOM
    const shadow = this.attachShadow({ mode: "open" })
    shadow.innerHTML = "<h1> Hello World</h1>"

    build() {
      
    }

    style () {

    }
  }
}

// Definir o elemento customizado
customElements.define('card-news', Cardnews)