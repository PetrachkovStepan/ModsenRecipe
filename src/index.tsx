import * as React from "react";

import { createRoot } from "react-dom/client";

import App from "./App/App";

import "./styles.css";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);
