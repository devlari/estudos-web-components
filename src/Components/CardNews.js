// criando componentes com JS vanilla <- extende do HTMLElement
class Cardnews extends HTMLElement {
  constructor() {
    super();
    // criando o shadow DOM <- Encapsulamento.
    // É como se eu tivesse criando um componente do React com o styled-components e o styled-system juntos, sem precisar instalar nada.
    // o shadow DOM é um DOM encapsulado, que não pode ser acessado por fora, e que pode ser estilizado com CSS.
    const shadow = this.attachShadow({ mode: "open" });

    //teste
    // Respeitar a hierarquia usando appendChild
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  // Construir o componente
  build() {
    const componentRoot = document.createElement("div");
    const cardLeft = document.createElement("div");
    const cardRight = document.createElement("div");

    componentRoot.setAttribute("class", "card");
    cardLeft.setAttribute("class", "card__left");
    cardRight.setAttribute("class", "card__right");

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

    const imagemNoticia = document.createElement("img");
    imagemNoticia.setAttribute("src", this.getAttribute("imagem") || "#");

    cardRight.appendChild(imagemNoticia);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  // Estilizar o componente
  styles() {
    const style = document.createElement("style");

    style.textContent = `
      .card {
          width: 720px;
          height: 210px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 20px 10px;
          margin-bottom: 20px;
          margin-left: 20px;
      }

      .card__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
      }


      .card__left > a {
          margin-top: 15px;
          font-size: 25px;
          font-weight: 700;
          color: #000;
          text-decoration: none;
      }

      .card__left > p {
          color: grey;
      }

      .card__left > span {
          font-weight: 400;
      }

      .card__right img {
          width: 200px;
          height: 200px;
      }    
    `;

    return style;
  }
}

// registrando o componente no customElements do DOM
customElements.define("card-news", Cardnews);
