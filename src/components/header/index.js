import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, ListContainer } from "./style";
import { useAuth } from "../../providers/auth";
// Função que lista o cabeçalho de paginação
const Nav = () => {
  const { usuario } = useAuth();
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
        {usuario && (
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        )}
        <li>
          <Link to="/sobrenos">Sobre nós</Link>
        </li>
      </ListContainer>
    </NavContainer>
  );
};

export default Nav;
