import { Routes, Route, Link } from "react-router-dom";

import { ProductsList } from "../pages/products/ProductsList";
import { Register } from "../pages/register/Register";

const Routers = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Produtos</Link>
            </li>
            <li>
              <Link to="/register-product">Cadastrar produtos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/register-product" element={<Register />} />
      </Routes>
    </>
  );
};

export { Routers };
