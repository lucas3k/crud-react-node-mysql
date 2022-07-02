import { Fragment, useEffect, useState } from "react";
import Axios from "axios";

import { CardsProducts } from "../../shared/components/cards/CardsProducts";
import { Box } from "@mui/material";

const ProductsList = () => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getProducts")
      .then((response) => setListProducts(response?.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!listProducts.length) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        {listProducts.map((product, index) => (
          <Fragment key={index}>
            <CardsProducts products={product} />
          </Fragment>
        ))}
      </Box>
      <Box sx={{ pb: 2.5 }} />
    </>
  );
};

export { ProductsList };
