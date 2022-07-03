import { useState } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { FormDialog } from "../dialogs/Dialog";

const CardsProducts = ({ products }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        id={products.idProduto}
        title={products.nome}
        cost={products.preco}
        category={products.descricao}
      />
      <Card
        sx={{
          backgroundColor: "#DEDEDE",
          m: 1,
          flex: "1 0 300px",
          boxShadow: "0 1px 3px #AAA",
        }}
      >
        <CardContent>
          <Typography variant="h4" component="h5" sx={{ color: "#131313" }}>
            {products.nome}
          </Typography>
          <Typography
            sx={{ fontSize: 14, color: "#333", fontWeight: "500" }}
            paragraph
          >
            {products.descricao}
          </Typography>
          <Typography
            paragraph
            sx={{ fontSize: 20, color: "#333", fontWeight: "500" }}
          >
            {products.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Typography>
          <CardActions>
            <Button variant="contained" size="small" onClick={handleOpen}>
              Modificar
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export { CardsProducts };
