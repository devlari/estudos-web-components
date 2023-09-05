// criando componentes com JS vanilla <- extende do HTMLElement
class Cardnews extends HTMLElement {
  constructor() {
    super();
    // criando o shadow DOM <- Encapsulamento.
    // É como se eu tivesse criando um componente do React com o styled-components e o styled-system juntos, sem precisar instalar nada.
    // o shadow DOM é um DOM encapsulado, que não pode ser acessado por fora, e que pode ser estilizado com CSS.
    const shadow = this.attachShadow({ mode: "open" });

    // Respeitar a hierarquia usando appendChild
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  // Construir o componente
  build() {
    const componentRoot = document.createElement("div");
    const cardLeft = document.createElement("div");
    const cardRight = document.createElement("div");

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    componentRoot.classList.add("card-news");

    const img = document.createElement("img");
    img.src = this.getAttribute("img");

    const title = document.createElement("h1");
    title.textContent = this.getAttribute("title");

    const description = document.createElement("p");
    description.textContent = this.getAttribute("description");

    const link = document.createElement("a");
    link.textContent = "Leia mais";
    link.href = this.getAttribute("link");

    componentRoot.appendChild(img);
    componentRoot.appendChild(title);
    componentRoot.appendChild(description);
    componentRoot.appendChild(link);

    return componentRoot;
  }

  // Estilizar o componente
  styles() {}
}

// registrando o componente no customElements do DOM
customElements.define("card-news", Cardnews);
