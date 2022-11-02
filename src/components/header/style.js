import styled from "styled-components";
//Estilização do cabeçalho de paginação
export const NavContainer = styled.nav`
  display: flex;
  width: 96%;
  height: 80px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  list-style: none;
  width: 60%;
  max-width: 640px;
  li {
    a {
      text-decoration: none;
      color: white;
    }
  }
`;
