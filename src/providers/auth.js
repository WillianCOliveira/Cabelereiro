import React, { useEffect, useState } from "react";
import saloes from "../agendamentos.json";
// Gera informações que serão utilizadas em todo o site para que não precise fazer prop drilling
export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("Usuario"))
  );
  const [localAgendamentos, setLocalAgendamentos] = useState(
    JSON.parse(localStorage.getItem("Agendamentos"))
  );

  return (
    <AuthContext.Provider
      value={{
        usuario,
        setUsuario,
        localAgendamentos,
        setLocalAgendamentos,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
