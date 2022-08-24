import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, ListContainer } from "./style";

const Nav = () => {
  return (
    <NavContainer>
      <p>Logo</p>
      <ListContainer>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>
        <li>
          <Link to="/sobrenos">Sobre nós</Link>
        </li>
      </ListContainer>
    </NavContainer>
  );
};

export default Nav;
