import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img alt="Just skate." src="/images/logo.png" />
          </li>
          <li><Link to={"/"} >Home</Link></li>
          <li><NavLink to={"/boards"}>Boards</NavLink></li>
          <li><NavLink to={"/carts"}>carts</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
