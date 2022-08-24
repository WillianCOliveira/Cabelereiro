import React from "react";
import { Button } from "../form/style";
import { Container } from "./style";

const Cancelamento = ({ salao, cancelar }) => {
  return (
    <Container>
      {salao &&
        salao.datas.map((element, index) => {
          return (
            <div key={index}>
              <p>{element.servico}</p>
              <p>{element.date}</p>
              <p>{element.time}</p>
              <Button
                onClick={() => {
                  cancelar(element.date, element.time);
                }}
              >
                Cancelar
              </Button>
            </div>
          );
        })}
    </Container>
  );
};
export default Cancelamento;
