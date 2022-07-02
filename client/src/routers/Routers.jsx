import { Routes, Route } from "react-router-dom";

import { Register } from "../pages/register/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
};

export { Routers };
