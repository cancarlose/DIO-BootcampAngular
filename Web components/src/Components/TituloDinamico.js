class TituloDinamico extends HTMLElement {
  constructor(){
    super();

    // criação da shadow DOM
    const shadow = this.attachShadow({ mode: "open" })

    // base do component
    const componentRoot = document.createElement("h1")
    componentRoot.textContent = this.getAttribute("Titulo")

    // estilo do component
    const style = document.createElement("style")
    style.textContent = `
    h1 {
      color: red;
    }
    `

    // envio para a shadow
    shadow.appendChild(componentRoot)
    shadow.appendChild(style)

  }
}

// Definir o elemento customizado
customElements.define('titulo-dinamico', TituloDinamico)