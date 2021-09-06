import React, { useContext, useState } from "react";
import { SessionContext, getSession } from "../session";
import { Link } from "react-router-dom";

export function Header() {
  const { user } = useContext(SessionContext);

  return (
    <header className="header">
      <figure>
        <img src="psr\src\images\PSR.png" alt="" />
      </figure>

      <nav id="menu-principal">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/profile">profile</Link>
              </li>
              <li>
                <Link to="/my-anime-list">my anime list</Link>
              </li>
              <li>
                <Link to="/anime/1">anime</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
