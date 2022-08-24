import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 640px;
  width: 80%;
  label {
    color: white;
    margin: 1rem 0;
  }
`;

export const CustomizeTextField = styled(TextField)`
  input {
    color: white !important;
    height: 60px;
  }

  .MuiInput-underline {
    margin: 1rem 0;
  }

  .MuiInput-underline::before {
    border-color: #f1cd76;
  }
`;
export const CustomizeSelect = styled(Select)`
  color: white;
  .MuiSelect-select {
    height: 60px;
    color: white !important;
  }
  .MuiInput-underline::before {
    border-color: #f1cd76;
  }
  fieldset {
    border-color: #f1cd76;
  }

  margin-bottom: 3rem;
  svg {
    fill: #f1cd76;
  }
`;

export const Button = styled.button`
  max-width: 264px;
  height: 64px;
  width: 80%;
  margin: 0 auto;
  color: black;
  background-color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;
