import React from "react";
import Cancelamento from "../../components/cancelamento";
import { useAuth } from "../../providers/auth";
// Tela do usuario que permite que ele altere as suas informações e gerencie seus agendamentos.
const Usuario = () => {
  const { usuario, localAgendamentos, setLocalAgendamentos } = useAuth();
  // Função que lista os agendamentos do própio usuario
  const getAgendamentos = () => {
    if (usuario && localAgendamentos) {
      const listaAgendamentosUsuario = [];
      localAgendamentos.Saloes.forEach((salao) => {
        salao.datas.forEach((element) => {
          if (element.cliente === usuario.email) {
            listaAgendamentosUsuario.push(element);
          }
        });
      });
      console.log(listaAgendamentosUsuario);
      return listaAgendamentosUsuario;
    }
  };

  return (
    <div>
      <div>
        <p>Informações do usuario</p>
        <p>{usuario.nome}</p>
        <p>{usuario.email}</p>
      </div>
      <div>
        <p>Agendamentos</p>
        {getAgendamentos().map((element, index) => {
          console.log(element);
          return (
            <Cancelamento
              key={index}
              data={element}
              localAgendamentos={localAgendamentos}
              setLocalAgendamentos={setLocalAgendamentos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Usuario;
