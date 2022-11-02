import React from "react";
import Data from "../../agendamentos.json";
import Salao from "../salao";
import { Link } from "react-router-dom";
import Salaocard from "../../components/salaocard";
import { Cards } from "./style";
// Lista os Cards dos salões disponíveis na plataforma
const ListaSaloes = () => {
  const saloes = Data.Saloes;
  return (
    <Cards>
      {saloes.map((salao, index) => {
        return <Salaocard salao={salao} key={index} />;
      })}
    </Cards>
  );
};
export default ListaSaloes;
