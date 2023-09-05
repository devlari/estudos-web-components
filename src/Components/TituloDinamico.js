class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // base do componente
    const componentRoot = document.createElement("h1");

    // getAttribute -> nomeia o atributo do componente
    componentRoot.textContent = this.getAttribute("titulo");

    // estilização do componente
    const style = document.createElement("style");
    style.textContent = `
        h1 {
            color: red;
        }
    `;

    // adicionando o componente e o estilo no shadow DOM
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

// colocar o - no nome do componente é uma boa prática
customElements.define("titulo-dinamico", TituloDinamico);
