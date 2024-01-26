class Cardnews extends HTMLElement {
  constructor() {
    super();

    // Criação da Shadow DOM
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    // Criação da tag pai, Card
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    // Criação do Card-left
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card-left");

    // Criação do Autor da notícia na div card-left
    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    // Criação do Título da notícia na div card-left
    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url")

    // Criação do Conteúdo da notícia na div card-left
    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    // Afiliação dos elementos a div card-left
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    // Criação da tag Card-right
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    // Criação da imagem na div card-right
    const newsImage = document.createElement("img");

    // Afiliação das div card-left e right, na div pai card
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {


  }
}

customElements.define("card-news", Cardnews);