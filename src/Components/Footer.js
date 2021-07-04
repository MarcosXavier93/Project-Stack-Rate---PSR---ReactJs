import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="rodape">
        <img class="logo-rodape" src="" alt="Logo do PSR'" />
        <div>
          <p class="texto-rodape">
            © O nome "PSR", a logomarca, a vinheta e as imagens são todos
            propriedade do <a href="https://www.youtube.com">Canal PSR</a> do
            Youtube e do blog
            <a href="http://localhost" target="_blank">
              localhost
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
