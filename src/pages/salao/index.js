import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Agendamentos from "../../agendamentos.json";
import { useParams } from "react-router-dom";
import Cancelamento from "../../components/cancelamento";
import {
  Button,
  CustomizeSelect,
  CustomizeTextField,
  FormContainer,
} from "../../components/form/style";
import { useAuth } from "../../providers/auth";
// Tela principal de informações do Salão, para agendamento, cancelamento e edição.
const Salao = () => {
  const [salao, setSalao] = useState();
  const [availableDates, setAvailableDates] = useState();
  const { salaoId } = useParams();
  const { usuario, localAgendamentos, setLocalAgendamentos } = useAuth();
  console.log(localAgendamentos);
  useEffect(() => {
    if (!localAgendamentos) {
      const thisSalao = Agendamentos.Saloes.find((element) => {
        return element.id === salaoId;
      });
      setSalao(thisSalao);
      localStorage.setItem("Agendamentos", JSON.stringify(Agendamentos));
      setLocalAgendamentos(localStorage.getItem("Agendamentos"));
    }
  }, []);

  const horariosDoDia = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const [horariosDisponiveis, setHorariosDisponiveis] = useState([
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ]);

  const [primeiroHorario, setPrimeiroHorario] = useState(
    horariosDisponiveis[0]
  );

  const [servicos, setServicos] = useState("corte_de_cabelo");

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const clearDate = (date) => {
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getFullYear();
    return `${day} - ${month} - ${year}`;
  };

  const handleSetDate = (value) => {
    const date = new Date(value);
    setDate(value);
  };

  const agendar = (evt) => {
    evt.preventDefault();
    const agendamento = { servico: servicos, date, time };
    const agendamentosJson = localAgendamentos;
    console.log(agendamentosJson);
    const index = agendamentosJson.Saloes.findIndex(
      (element) => element.id === salaoId
    );
    agendamentosJson.Saloes[index].datas.push(agendamento);
    localStorage.setItem("Agendamentos", JSON.stringify(agendamentosJson));
    setLocalAgendamentos(agendamentosJson);
    setTime("");
    setDate("");
    setServicos("");
  };
  //
  const filterAvailableDates = (thisSalao) => {
    if (!date) {
      return;
    }

    const filterDatesObjects = thisSalao.datas.filter((element) => {
      console.log(element.date);
      console.log(date);
      if (element.date === date) {
        return element;
      }
    });
    const filterDates = filterDatesObjects.map((element) => {
      return element.time;
    });
    const filterTimes = horariosDoDia.filter((element) => {
      return !filterDates.includes(element);
    });
    console.log(filterTimes);
    setPrimeiroHorario(filterTimes[0]);
    setHorariosDisponiveis(filterTimes);
  };
  useEffect(() => {
    if (localAgendamentos) {
      const thisSalao = localAgendamentos.Saloes.find((element) => {
        return element.id === salaoId;
      });
      setSalao(thisSalao);
      filterAvailableDates(thisSalao);
    } else {
      filterAvailableDates(salao);
    }
  }, [date, time, servicos, localAgendamentos, filterAvailableDates, salao]);
  console.log(salao);
  return (
    <div>
      {salao && (
        <FormContainer onSubmit={(evt) => agendar(evt)}>
          <InputLabel id="select-servcos-label">
            Selecione um serviço
          </InputLabel>
          <CustomizeSelect
            value={servicos}
            onChange={(evt) => setServicos(evt.target.value)}
            labelId="select-servicos-label"
            id="select-servicos"
            label="servicos"
          >
            <MenuItem value="Corte de cabelo">Corte de cabelo</MenuItem>
            <MenuItem value="Manicure">Manicure</MenuItem>
            <MenuItem value="Pedicure">Pedicure</MenuItem>
          </CustomizeSelect>

          <CustomizeTextField
            variant="standard"
            type="date"
            inputFormat="yyyy-MM-dd"
            placeholder="Data"
            value={date}
            onChange={(evt) => handleSetDate(evt.target.value)}
          />

          {date && (
            <>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <CustomizeSelect
                displayEmpty
                required
                defaultValue=""
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={time}
                onChange={(evt) => setTime(evt.target.value)}
              >
                <MenuItem value="">Selecione um horário</MenuItem>
                {horariosDisponiveis.map((horario) => {
                  return (
                    <MenuItem key={horario} value={horario}>
                      {horario}
                    </MenuItem>
                  );
                })}
              </CustomizeSelect>
            </>
          )}
          <CustomizeTextField
            variant="standard"
            type="email"
            placeholder="Email"
          />
          <Button type="submit">Enviar</Button>
        </FormContainer>
      )}
      {salao?.datas.map((data, index) => {
        if (data.cliente === usuario?.email) {
          return (
            <div>
              {data.date}
              {data.servico}
              {data.time}
              {data.cliente}
              <Cancelamento
                key={index}
                data={data}
                localAgendamentos={localAgendamentos}
                setLocalAgendamentos={setLocalAgendamentos}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Salao;
