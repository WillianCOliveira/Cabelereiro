import React from "react";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel } from "@mui/material";
import {
  FormContainer,
  CustomizeSelect,
  CustomizeTextField,
  Button,
} from "./style";
//Formulario de Cadastro
const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <CustomizeTextField
        variant="standard"
        type="text"
        placeholder="Nome"
        {...register("name")}
      />
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
      <CustomizeTextField
        variant="standard"
        placeholder="Endereço"
        {...register("endereço")}
      />
      <CustomizeTextField
        variant="standard"
        type="phone"
        placeholder="Telefone"
        {...register("Telefone")}
      />

      <InputLabel id="demo-simple-select-standard-label">Genero</InputLabel>
      <CustomizeSelect
        {...register("genero")}
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="genero"
        defaultValue=""
      >
        <MenuItem value="feminino">Feminino</MenuItem>
        <MenuItem value="masculino">Masculino</MenuItem>
        <MenuItem value="outro">Outro</MenuItem>
      </CustomizeSelect>

      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
};
export default Form;
