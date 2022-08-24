import React from "react";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel } from "@mui/material";
import { FormContainer, CustomizeTextField, Button } from "../form/style";

const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
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
