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

    componentRoot.setAttribute("class", "card");
    componentRoot.setAttribute("class", "card__left");
    componentRoot.setAttribute("class", "card__right");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Autor");

    const linkNoticia = document.createElement("a");
    linkNoticia.textContent = this.getAttribute("titulo") || "Carregando...";
    linkNoticia.setAttribute("href", this.getAttribute("link") || "#");

    const conteudoNoticia = document.createElement("p");
    conteudoNoticia.textContent =
      this.getAttribute("conteudo") || "Carregando...";

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkNoticia);
    cardLeft.appendChild(conteudoNoticia);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const imagemNoticia = document.createElement("img");
    imagemNoticia.setAttribute("src", this.getAttribute("imagem") || "#");

    cardRight.appendChild(imagemNoticia);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  // Estilizar o componente
  styles() {}
}

// registrando o componente no customElements do DOM
customElements.define("card-news", Cardnews);
