import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <figure>
        <img src="psr\src\images\PSR.png" alt="" />
      </figure>

      <nav id="menu-principal">
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/my-anime-list">my anime list</Link>
          </li>
          <li>
            <Link to="/anime">anime</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
