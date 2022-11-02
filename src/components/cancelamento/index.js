import React from "react";
import { Button } from "../form/style";
import { Container } from "./style";
//Função que cancela os agendamentos feitos pelo usuario
const Cancelamento = ({ data, localAgendamentos, setLocalAgendamentos }) => {
  console.log(localAgendamentos.Saloes);
  const cancelar = (date, time) => {
    const index = localAgendamentos.Saloes.findIndex((element) => {
      console.log(data);
      return element.id === data.salaoID;
    });
    console.log(index);

    const indexData = localAgendamentos.Saloes[index].datas.findIndex(
      (element) => element.date === date && element.time === time
    );
    localAgendamentos.Saloes[index].datas.splice(indexData, 1);
    localStorage.setItem("Agendamentos", JSON.stringify(localAgendamentos));
    setLocalAgendamentos(localAgendamentos);
  };

  return (
    <Container>
      <div>{data.servico}</div>
      {data && (
        <Button
          onClick={() => {
            cancelar(data.date, data.time);
          }}
        >
          Cancelar
        </Button>
      )}
    </Container>
  );
};
export default Cancelamento;
