class Cardnews extends HTMLElement{
  constructor() {
    super();

    // criação da shadow DOM
    const shadow = this.attachShadow({ mode: "open" })
    shadow.appendChild(this.build())
    shadow.appendChild(this.style())

    // Criação das tags
    build();{
      // Class pai, Card
      const componentRoot = document.createElement("div")
      componentRoot.setAttribute("class","card")

      // Tag card-left conteúdo
      const cardLeft = document.createElement("div")
      cardLeft.setAttribute("class", "card-left")

      const autor = document.createElement("span")
      const linkTitulo = document.createElement("a")
      const newsContent = document.createElement("p")

      // Tag card-right imagem
      const cardRight = document.createElement("div")
      cardRight.setAttribute("class", "card-right")

      componentRoot.appendChild(cardLeft)
      componentRoot.appendChild(cardRight)

      return componentRoot
    }

    // Estilização das tags
    style ();{

    }
  }
}

// Definir o elemento customizado
customElements.define("card-news", Cardnews)