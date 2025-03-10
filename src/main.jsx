import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ChakraProvider>
  //   <App />
  // </ChakraProvider>

  <StrictMode>
    <App/>
  </StrictMode>
);
