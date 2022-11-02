import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./style";

// Função que cria os cards dos salões disponíveis na plataforma
const Salaocard = ({ salao }) => {
  return (
    <Card>
      <img src="https://picsum.photos/200/300" />
      <h2>{salao.nome}</h2>
      <p>Corte para carecas</p>

      <Link to={`salao/${salao.id}`}>Ver mais</Link>
    </Card>
  );
};

export default Salaocard;
