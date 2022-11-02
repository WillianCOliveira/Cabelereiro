import styled from "styled-components";
//Estilização dos Cards dos salões disponíveis na plataforma
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 320px;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  margin: 2rem;
  img {
    object-fit: cover;
    height: 200px;
    width: 240px;
    margin: 0 auto;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
