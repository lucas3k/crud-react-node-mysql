import { Fragment, useState } from "react";
import Axios from "axios";

import { Box, Container } from "@mui/material";

import { InputText } from "../../shared/components/inputs/InputText";
import { ButtonSubmit } from "../../shared/components/buttons/ButtonSubmit";

const fieldsRegister = [
  {
    id: "nameProduto",
    name: "nameProduto",
    autoComplete: "",
    label: "Nome do produto",
    autoFocus: true,
  },
  {
    id: "priceProduct",
    name: "priceProduct",
    autoComplete: "",
    label: "Preço do produto",
    autoFocus: false,
  },
  {
    id: "describeProduct",
    name: "describeProduct",
    autoComplete: "",
    label: "Descrição do produto",
    autoFocus: false,
  },
];

const Register = () => {
  const [valuesInputsRegister, setValuesInputsRegister] = useState(
    fieldsRegister.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );

  const handleClick = () => {
    Axios.post("http://localhost:3001/register", {
      nome: valuesInputsRegister.nameProduto,
      preco: valuesInputsRegister.priceProduct,
      descricao: valuesInputsRegister.describeProduct,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          {fieldsRegister.map((field) => (
            <Fragment key={field.id}>
              <InputText
                fields={field}
                form={valuesInputsRegister}
                setForm={setValuesInputsRegister}
              />
            </Fragment>
          ))}
          <ButtonSubmit
            variant="contained"
            type="submit"
            text="Cadastrar produto"
            color="success"
            onSubmit={handleClick}
          />
        </Box>
      </Box>
    </Container>
  );
};

export { Register };
