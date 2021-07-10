function Header() {
  return (
    <header>
      <figure>
        <img src="psr\src\images\PSR.png" alt="" />
      </figure>

      <nav id="menu-principal">
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Cadastrar</a>
          </li>
          <li>
            <a href="#">Perfil</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
