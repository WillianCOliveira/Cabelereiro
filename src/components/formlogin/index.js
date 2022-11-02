import React from "react";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel } from "@mui/material";
import { FormContainer, CustomizeTextField, Button } from "../form/style";
import usuarios from "../../usuarios.json";
import { useAuth } from "../../providers/auth";
//Função do formulario de login no site
const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const { setUsuario } = useAuth();
  const onSubmit = (data) => {
    if (setUsuario) {
      usuarios.Usuarios.forEach((element) => {
        if (element.email === data.email && element.senha === data.password) {
          setUsuario(element);
          localStorage.setItem("Usuario", JSON.stringify(element));
          return;
        }
      });
    }
  };

  return (
    // Container do formulario
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <CustomizeTextField
        variant="standard"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      <CustomizeTextField
        variant="standard"
        type="password"
        placeholder="Senha"
        {...register("password")}
      />

      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
};
export default FormLogin;
