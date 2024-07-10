import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { MantineProvider } from "@mantine/core";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MantineProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </MantineProvider>
    </React.StrictMode>
  );
}
