import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import { Theme } from "./shared/theme/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </CssBaseline>
    </BrowserRouter>
  </React.StrictMode>
);
