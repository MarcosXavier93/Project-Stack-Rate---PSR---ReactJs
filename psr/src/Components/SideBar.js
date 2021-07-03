import React from "react";

function SideBar() {
  return (
    <aside>
      <nav id="menu">
        <img
          src="http://i.imgur.com/9jJwdMu.png"
          alt="Um ícone com o rosto de um cachorro e outro de um gato"
        />
        <ul>
          <li>Inicial</li>
          <li>Perfil</li>
          <li>Animes</li>
        </ul>
      </nav>
      <span id="alterna-menu" class="hamburger">
        <span>☰</span>
      </span>

      <script src="./Menu.js"></script>
    </aside>
  );
}

export default SideBar;
